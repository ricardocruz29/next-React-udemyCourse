import React from "react";
import EventItem from "./event-item";
import styles from "./event-list.module.css";

export default function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
}
