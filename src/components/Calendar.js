import React from "react";
import Days from "./Days";
import { days } from "../helpers/datas/calendar";
import "../style/calendar.css";

const Calendar = () => {
  return (
    <div className="my-3 me-5">
      <div className="calendar d-flex flex-column align-items-center justify-content-center">
        <div className="calendar-header d-flex align-items-center justify-content-center">
          <h2>June 2022</h2>
        </div>
        <div className="calendar-body d-flex flex-column flex-grow-1">
          <div className="table-header d-flex align-items-end justify-content-between mx-5 fw-bold">
            {days.map((d, index) => {
              return (
                <div className="weekday text-center" key={index}>
                  <p>{d}</p>
                </div>
              );
            })}
          </div>
          <Days />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
