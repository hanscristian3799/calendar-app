import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import { selectedDate } from "../store/reducers/calendarSlice";
import Form from "./Form";

const Events = () => {
  // const { selectedDate } = useSelector((state) => state.calendar.selectedDate);
  const date = useSelector(selectedDate);

  useEffect(() => {
    console.log("SELECTED DATE", date);
  }, [date]);

  return (
    <div className="event-container d-flex flex-column align-items-center justify-content-around px-4">
      <h2>Event Detail</h2>
      <div className="event">{date ? date.date : "NOONE"}</div>
      <Form />
    </div>
  );
};

export default Events;
