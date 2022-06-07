import React, { useState } from "react";
import Days from "./Days";
import {days, months} from '../helpers/datas/calendar'
import '../style/calendar.css'

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  
  const changeCurrentDay = (day) => {
    console.log("CHANGE CURR DAY", new Date(day.year, day.month, day.number));
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
    <div>
      <div className="calendar">
      <div className="calendar-header">
        <h2>
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
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
        <Days propsDay={currentDay} changeCurrentDay={changeCurrentDay} />
      </div>
    </div>
    </div>
  );
};

export default Calendar;
