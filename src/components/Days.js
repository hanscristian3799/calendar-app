import React from "react";
import "../style/calendar.css";
import Day from "./Day";

const Days = ({ propsDay, changeCurrentDay }) => {
  let firstDay = new Date(propsDay.getFullYear(), propsDay.getMonth(), 1);
  let weekOfFirstDay = firstDay.getDay() - 1;
  let currentDays = [];

  //ADD METHOD TO CHANGE SELECTED DAY IN STORE HERE
  //CHANGE THIS COMPONENT STATE

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekOfFirstDay === 0) {
      firstDay.setDate(firstDay.getDate() - 7);
    } else if (day === 0) {
      firstDay.setDate(firstDay.getDate() + (day - weekOfFirstDay));
    } else {
      firstDay.setDate(firstDay.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDay.getMonth() === propsDay.getMonth(),
      date: new Date(firstDay),
      month: firstDay.getMonth(),
      number: firstDay.getDate(),
      selected: firstDay.toDateString() === propsDay.toDateString(),
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
