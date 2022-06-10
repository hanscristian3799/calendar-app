import React from "react";
import "../style/calendar.css";
import Day from "./Day";
import { setSelectedDate, dates } from "../store/reducers/calendarSlice";
import { useDispatch, useSelector } from "react-redux";

const Days = () => {
  const dispatch = useDispatch();
  const currentDays = useSelector(dates);

  const changeCurrentDay = (day) => {
    dispatch(setSelectedDate(day));
  };

  return (
    <div className="table-content d-flex flex-wrap flex-grow-1 justify-content-center">
      {currentDays.map((day, index) => {
        return (
          <Day key={index}>
            <div
              className={
                "calendar-day position-relative" +
                (day.currentMonth ? " current" : " day-disabled") +
                (day.selected ? " selected fw-bolder" : "")
              }
              onClick={() => (day.currentMonth ? changeCurrentDay(day) : null)}
            >
              <p>{day.number.toString()}</p>
            </div>
          </Day>
        );
      })}
    </div>
  );
};

export default Days;
