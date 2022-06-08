import React, { useState, useRef } from "react";
import TimePicker from "react-time-picker";
import "../style/event.css";

const Form = () => {
  const [time, setTime] = useState("10:00");
  const [invitees, setInvitess] = useState([]);
  const inviteeRef = useRef("");

  const addInvitees = (invitee) => {
    console.log("AAAAAAAAAAAAAAAAAAA");
    console.log("add invitee", invitee);
    if (!invitee) return;
    setInvitess([...invitees, invitee]);
  };

  const addEvent = () => {
    console.log("INVITEE", invitees);
  };

  return (
    <div>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Event name" />
      </div>
      <div className="mb-3">
        <TimePicker
          onChange={setTime}
          value={time}
          className="time"
          disableClock
        />
      </div>
      <div className="mb-3">
        <div className="d-flex">
          <input
            type="email"
            className="form-control me-1"
            placeholder="Invitee Nane"
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
            <span key={index} class="chip mb-2 me-2">{inv}</span>
          );
        })}
      </div>
      <button className="btn btn-primary" onClick={addEvent}>
        Submit
      </button>
    </div>
  );
};

export default Form;
