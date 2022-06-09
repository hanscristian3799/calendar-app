import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import { selectedDate, events } from "../store/reducers/calendarSlice";
import Form from "./Form";

const Events = () => {
  // const { selectedDate } = useSelector((state) => state.calendar.selectedDate);
  const date = useSelector(selectedDate);
  const allEvents = useSelector(events);

  useEffect(() => {
    console.log("SELECTED DATE", date);
  }, [date]);

  const viewEvents = () => {
    console.log("EVENTS", allEvents);
  };

  return (
    <div className="event-container d-flex flex-column align-items-center justify-content-around px-4">
      <h2 className="text-light">Event Detail</h2>
      <div className="event">{date ? date.date : "NOONE"}</div>
      <button className="btn btn-danger" onClick={viewEvents}>
        View Events
      </button>
      <Form date={date.date} />
    </div>
  );
};

export default Events;
