import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          title={item.title}
          image={item.image}
          id={item.id}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
