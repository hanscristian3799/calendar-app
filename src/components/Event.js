import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import { selectedDate, dates } from "../store/reducers/calendarSlice";
import Form from "./Form";

const Events = () => {
  const stateDate = useSelector(selectedDate);
  const [date, setDate] = useState(null);
  const allEvents = useSelector(dates);

  useEffect(() => {
    setDate(allEvents.find((event) => event.date === stateDate.date));
  }, [allEvents, stateDate]);

  return (
    <div className="event-container d-flex flex-column align-items-center px-4">
      <h2>{stateDate ? stateDate.date : "Select Date"}</h2>
      <div className="col-12">
        <h5>Events</h5>
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
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <div>{event.name}</div>
                          <div
                            className="me-4"
                            style={{
                              width: "20px",
                              height: "20px",
                              background: `#${event.color}`,
                            }}
                          ></div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={`collapse${event.id}`}
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <p>
                          <span className="fw-semibold">Time: </span>{" "}
                          {event.time}
                        </p>
                        <div>
                          <p className="fw-semibold">Invitees</p>
                          <ul className="list-group">
                            {event.invitees.map((invitee, index) => {
                              return (
                                <li key={index} className="list-group-item">
                                  {invitee}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
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
      {date ? (
        date.events.length !== 0 && date.events.length === 3 ? null : (
          <Form />
        )
      ) : null}
    </div>
  );
};

export default Events;
