import React from "react";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";

export default function HomePage({ featuredEvents }) {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  if (!featuredEvents) return { notFound: true };

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800, //every 30 minutes, page is re-generated
  };
}
