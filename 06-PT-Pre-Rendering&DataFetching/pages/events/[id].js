import React from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventPage({ event }) {
  if (!event) return <p className="center">Loading...</p>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);

  if (!event) return { notFound: true };

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents();

  const paths = featuredEvents.map((event) => ({ params: { id: event.id } }));

  return {
    paths,
    fallback: true,
  };
}
