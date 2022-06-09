import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Days from "./Days";
import { days, months } from "../helpers/datas/calendar";
import "../style/calendar.css";
import { setSelectedDate } from "../store/reducers/calendarSlice";

const Calendar = () => {
  const dispacth = useDispatch();

  const currentMonth = new Date();

  const changeCurrentDay = (day) => {
    dispacth(setSelectedDate({ ...day, date: day.date.toDateString() }));
    // setCurrentDay(new Date(day.year, day.month, day.number));
  };

  return (
    <div className="card my-3">
      <div className="calendar d-flex flex-column align-items-center justify-content-center">
        <div className="calendar-header d-flex align-items-center justify-content-center">
          <h2 className="bg-success">
            {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
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
          <Days propsDay={currentMonth} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
