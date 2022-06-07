import React from "react";
import "../style/calendar.css";
import Day from "./Day";

const Days = ({ propsDay, changeCurrentDay }) => {
  let firstDay = new Date(propsDay.getFullYear(), propsDay.getMonth(), 1);
  console.log("FIRST DAY", firstDay.getDay());
  let weekOfFirstDay = firstDay.getDay() - 1;
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekOfFirstDay === 0) {
      console.log("1");
      firstDay.setDate(firstDay.getDate() - 7);
    } else if (day === 0) {
      console.log("2", weekOfFirstDay);
      firstDay.setDate(firstDay.getDate() + (day - weekOfFirstDay));
    } else {
      console.log("3");
      firstDay.setDate(firstDay.getDate() + 1);
    }

    console.log("day", day);
    console.log("number", firstDay.getDate());
    let calendarDay = {
      currentMonth: firstDay.getMonth() === propsDay.getMonth(),
      date: new Date(firstDay),
      month: firstDay.getMonth(),
      number: firstDay.getDate(),
      selected: firstDay.toDateString() === propsDay.toDateString(),
      year: firstDay.getFullYear(),
    };

    // console.log("ABC", calendarDay);
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
