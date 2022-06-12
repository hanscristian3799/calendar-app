import React, { useState, useRef, useEffect } from "react";
import { editEvent } from "../store/reducers/calendarSlice";
import { useDispatch } from "react-redux";
import TimePicker from "react-time-picker";

const EditModal = ({ event, isModalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const inviteeRef = useRef("");
  const nameRef = useRef("");
  const [time, setTime] = useState(event.time);
  const [errorText, setErrorText] = useState("");
  const [invitees, setInvitees] = useState([]);

  const deleteInvitee = (invitee) => {
    if (!invitee) return;
    const newInvitees = invitees.filter((inv) => inv !== invitee);
    setInvitees(newInvitees);
  };

  const addInvitees = (invitee) => {
    /* eslint-disable no-useless-escape */
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!invitee || regex.test(invitee) === false) {
      setErrorText("Email is not valid");
    } else {
      setErrorText("");
      setInvitees([...invitees, invitee]);
      inviteeRef.current.value = "";
    }
  };

  const cancelEdit = () => {
    inviteeRef.current.value = "";
    closeModal();
  };

  const editEventData = () => {
    if (
      event.name === nameRef.current.value &&
      event.invitees === invitees &&
      event.time === time
    ) {
      console.log("EYYY");
      return;
    }
    const data = {
      id: event.id,
      date: event.date,
      name: nameRef.current.value,
      invitees,
      time,
      color: event.color,
    };
    dispatch(editEvent(data));
  };

  useEffect(() => {
    nameRef.current.value = event.name;
    setInvitees(event.invitees);
    setTime(event.time);
  }, [isModalOpen, event]);

  return (
    <div
      className="modal fade"
      id={`staticBackdrop${event.id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Event
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => cancelEdit()}
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-12 mt-3">
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
                  <div className="d-flex align-items-center h-100 w-100">
                    {invitees.map((inv, index) => {
                      return (
                        <div
                          key={index}
                          className="chip ms-1 d-flex align-items-center"
                        >
                          <div className="mx-2">{inv}</div>
                          <div
                            className="me-2 text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteInvitee(inv)}
                          >
                            x
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="text-danger">{errorText}</div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => cancelEdit()}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={editEventData}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
