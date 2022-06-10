import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import { selectedDate, events } from "../store/reducers/calendarSlice";
import Form from "./Form";

const Events = () => {
  const date = useSelector(selectedDate);
  const allEvents = useSelector(events);

  useEffect(() => {
    console.log("DATE", date);
  });

  const viewEvents = () => {
    console.log("EVENTS", allEvents);
  };

  return (
    <div className="event-container d-flex flex-column align-items-center justify-content-around px-4">
      <h2 className="text-light">{date ? date.date : "Select Date"}</h2>
      <div className="event">{date ? date.date : ""}</div>
      <button className="btn btn-danger" onClick={viewEvents}>
        View Events
      </button>
      <Form />
    </div>
  );
};

export default Events;
