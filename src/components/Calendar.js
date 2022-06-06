import React, { useState } from "react";
import Days from "./Days";

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>
          {currentDay.getMonth()} {currentDay.getFullYear()}
        </h2>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {days.map((d, index) => {
            return (
              <div className="weekday" key={index}>
                <p>{d}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="table"></div> */}
        <Days propsDay={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
  );
};

export default Calendar;
