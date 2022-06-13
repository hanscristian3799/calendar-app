import React, { useState } from "react";
import { deleteEvent } from "../store/reducers/calendarSlice";
import { useDispatch } from "react-redux";
import EditModal from "./EditModal";

const Event = ({ event }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteItem = () => {
    dispatch(deleteEvent(event.id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
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
            <div className="fw-bold">{event.name}</div>
            <div
              className="me-4"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={`${event.color}`}
              style={{
                width: "20px",
                height: "20px",
                background: `#${event.color}`,
                border: "1px solid #aaaaaa76",
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
            <span className="fw-semibold">Time: </span> {event.time}{" "}
            {event.time.split(":")[0] < 12 ? "AM" : "PM"}
          </p>
          <div className="mb-3">
            <p className="fw-semibold">Invitees</p>
            <ul className="list-group">
              {event.invitees.map((invitee) => {
                return (
                  <li key={invitee.id} className="list-group-item">
                    {invitee.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-warning me-2"
              data-bs-toggle="modal"
              data-bs-target={`#staticBackdrop${event.id}`}
              onClick={openModal}
            >
              <span className="text-light">Edit</span>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteItem}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <EditModal
        event={event}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Event;
