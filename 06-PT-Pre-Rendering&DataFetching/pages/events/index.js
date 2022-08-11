import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../helpers/api-utils";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function EventsPage({ events }) {
  const router = useRouter();

  function handleFindEvents(month, year) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  if (!events) return { notFound: true };

  return {
    props: {
      events,
    },
  };
}
