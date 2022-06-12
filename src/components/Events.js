import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/index.css";
import { selectedDate, dates } from "../store/reducers/calendarSlice";
import Form from "./Form";
import Event from "./Event";

const Events = () => {
  const stateDate = useSelector(selectedDate);
  const [date, setDate] = useState(null);
  const allEvents = useSelector(dates);

  useEffect(() => {
    setDate(allEvents.find((event) => event.date === stateDate.date));
  }, [allEvents, stateDate]);

  return (
    <div className="event-container d-flex flex-column align-items-center px-4">
      <h2 className="my-3">{stateDate ? stateDate.date : "Select Date"}</h2>
      <div className="col-12">
        <h5>Events</h5>
        <div className="accordion" id="accordionExample">
          {date ? (
            date.events.length !== 0 ? (
              date.events.map((event) => {
                return <Event event={event} />;
              })
            ) : (
              <p>No Events</p>
            )
          ) : (
            <p>No Events</p>
          )}
        </div>
      </div>
      {date ? (
        date.events.length !== 0 && date.events.length === 3 ? null : (
          <Form />
        )
      ) : null}
    </div>
  );
};

export default Events;
