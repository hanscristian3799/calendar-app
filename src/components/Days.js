import React from "react";
import "../style/calendar.css";
import Day from "./Day";
import { setSelectedDate, selectedDate } from "../store/reducers/calendarSlice";
import { useDispatch, useSelector } from "react-redux";

const Days = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector(selectedDate);

  let firstDay = new Date(currentMonth.year, currentMonth.month, 1);
  let weekOfFirstDay = firstDay.getDay() - 1;
  let currentDays = [];

  const changeCurrentDay = (day) => {
    dispatch(setSelectedDate({ ...day, date: day.date.toDateString() }));
  };

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekOfFirstDay === 0) {
      firstDay.setDate(firstDay.getDate() - 7);
    } else if (day === 0) {
      firstDay.setDate(firstDay.getDate() + (day - weekOfFirstDay));
    } else {
      firstDay.setDate(firstDay.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDay.getMonth() === currentMonth.month,
      date: new Date(firstDay),
      month: firstDay.getMonth(),
      number: firstDay.getDate(),
      selected: firstDay.toDateString() === currentMonth.date,
      year: firstDay.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

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
