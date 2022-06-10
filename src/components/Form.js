import React, { useState, useRef } from "react";
import TimePicker from "react-time-picker";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, selectedDate } from "../store/reducers/calendarSlice";
import "../style/event.css";

const Form = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState("");
  const [invitees, setInvitess] = useState([]);
  const inviteeRef = useRef("");
  const nameRef = useRef("");
  const date = useSelector(selectedDate);

  const addInvitees = (invitee) => {
    if (!invitee) return;
    setInvitess([...invitees, invitee]);
  };

  const handleAddEvent = () => {
    console.log("INVITEE", invitees);
    if (!time || !nameRef.current.value || invitees.length < 1) return;
    const obj = {
      id: Math.round(new Date() / 1000),
      date,
      name: nameRef.current.value,
      invitees,
      time,
    };
    dispatch(addEvent(obj));
    setInvitess([]);
    nameRef.current.value = "";
    setTime("");
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Event name"
          ref={nameRef}
        />
      </div>
      <div className="mb-3">
        <TimePicker
          onChange={setTime}
          value={time}
          className="time"
          disableClock
          hourPlaceholder="10"
          minutePlaceholder="00"
        />
      </div>
      <div className="mb-3">
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
      <div className="invitees mb-3">
        {invitees.map((inv, index) => {
          return (
            <span key={index} className="chip mb-2 me-2">
              {inv}
            </span>
          );
        })}
      </div>
      <button className="btn btn-primary" onClick={handleAddEvent}>
        Submit
      </button>
    </div>
  );
};

export default Form;
