import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import { selectedDate, dates } from "../store/reducers/calendarSlice";
import Form from "./Form";

const Events = () => {
  const stateDate = useSelector(selectedDate);
  const [date, setDate] = useState(null);
  const allEvents = useSelector(dates);

  //FIX EVENT CHANGE ON PARTICULAR DATE

  useEffect(() => {
    setDate(allEvents.find((event) => event.date === stateDate.date));
    console.log("DT", date);
  }, []);

  const viewEvents = () => {
    console.log("EVENTS", allEvents);
  };

  return (
    <div className="event-container d-flex flex-column align-items-center justify-content-around px-4">
      <h2 className="text-light">
        {stateDate ? stateDate.date : "Select Date"}
      </h2>
      {/* RENDER VENT HERE */}

      <div className="col-12">
        <div className="accordion" id="accordionExample">
          {date ? (
            date.events.length !== 0 ? (
              date.events.map((event) => {
                return (
                  <div className="accordion-item" key={event.id}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${event.id}`}
                      >
                        {event.name}
                      </button>
                    </h2>
                    <div
                      id={`collapse${event.id}`}
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <p>{event.time}</p>
                        <ul>
                          {event.invitees.map((invitee, index) => {
                            return <li key={index}>{invitee}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No events</p>
            )
          ) : (
            <p>NO Events</p>
          )}
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Events;
