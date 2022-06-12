import React from "react";
import { deleteEvent } from "../store/reducers/calendarSlice";
import { useDispatch } from "react-redux";

const Event = ({ event }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteEvent(event.id));
  };

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
            <span className="fw-semibold">Time: </span> {event.time}
          </p>
          <div className="mb-3">
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
          <div className="d-flex justify-content-end">
            <button type="button" class="btn btn-warning me-2">
              <span className="text-light">Edit</span>
            </button>
            <button type="button" class="btn btn-danger" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
