import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Days from "./Days";
import { days, months } from "../helpers/datas/calendar";
import "../style/calendar.css";
import { addEvent, setSelectedDate } from "../store/reducers/calendarSlice";

const Calendar = () => {
  const dispacth = useDispatch();

  const [currentDay, setCurrentDay] = useState(new Date());

  const changeCurrentDay = (day) => {
    // console.log("SET DAY", );
    dispacth(addEvent({ ...day, date: day.date.toDateString() }));
    dispacth(setSelectedDate({ ...day, date: day.date.toDateString() }));
    setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
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
  );
};

export default Calendar;
