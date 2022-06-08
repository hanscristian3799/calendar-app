import React from "react";
import "../style/calendar.css";
import Day from "./Day";

const Days = ({ propsDay, changeCurrentDay }) => {
  let firstDay = new Date(propsDay.getFullYear(), propsDay.getMonth(), 1);
  let weekOfFirstDay = firstDay.getDay() - 1;
  let currentDays = [];

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
    <div className="table-content">
      {currentDays.map((day, index) => {
        return (
          <Day key={index}>
            <div
              className={
                "calendar-day" +
                (day.currentMonth ? " current" : " day-disabled") +
                (day.selected ? " selected" : "")
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
