import React, { useState, useRef } from "react";
import TimePicker from "react-time-picker";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, selectedDate } from "../store/reducers/calendarSlice";
import { generateColor } from "../helpers/functions/index";
import "../style/index.css";

const Form = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState("10:00");
  const [invitees, setInvitess] = useState([]);
  const inviteeRef = useRef("");
  const nameRef = useRef("");
  const date = useSelector(selectedDate);

  const addInvitees = (invitee) => {
    if (!invitee) return;
    setInvitess([...invitees, invitee]);
  };

  const handleAddEvent = () => {
    if (!time || !nameRef.current.value || invitees.length < 1) return;
    const obj = {
      id: Math.round(new Date() / 1000),
      date,
      name: nameRef.current.value,
      invitees,
      time,
      color: generateColor(selectedDate.events ? selectedDate.events : []),
    };
    dispatch(addEvent(obj));
    setInvitess([]);
    nameRef.current.value = "";
    setTime("");
  };

  return (
    <div className="col-12 mt-3">
      <h5>Input Events</h5>
      <div className="mb-1">
        <input
          type="text"
          className="form-control"
          placeholder="Event name"
          ref={nameRef}
        />
      </div>
      <div className="mb-1">
        <TimePicker
          onChange={setTime}
          value={time}
          className="time"
          disableClock
          hourPlaceholder="10"
          minutePlaceholder="00"
        />
      </div>
      <div className="mb-1">
        <div className="d-flex">
          <input
            type="email"
            className="form-control me-1"
            placeholder="Invitee Name"
            ref={inviteeRef}
          />
          <button
            className="btn btn-primary"
            onClick={() => addInvitees(inviteeRef.current.value)}
          >
            +
          </button>
        </div>
      </div>
      <div className="invitees mb-1">
        <div className="d-flex align-items-center h-100 w-100">
          {invitees.map((inv, index) => {
            return (
              <span key={index} className="chip ms-1">
                {inv}
              </span>
            );
          })}
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleAddEvent}>
        Submit
      </button>
    </div>
  );
};

export default Form;
