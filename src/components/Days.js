import React from "react";

const Days = ({ propsDay, changeCurrentDay }) => {
  let firstDay = new Date(propsDay.getFullYear(), propsDay.getMonth(), 1);
  console.log("CALENDAR DAY", firstDay.getMonth());
  let weekOfFirstDay = firstDay.getDay();
  //   console.log("PROP DAY", propsDay.getMonth());
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekOfFirstDay === 0) {
      firstDay.setDate(firstDay.getDate() - 7);
    } else if (day === 0) {
      firstDay.setDate(firstDay.getDate() + (day - firstDay));
    } else {
      firstDay.setDate(firstDay.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDay.getMonth(),
      date: new Date(firstDay),
      month: firstDay.getMonth(),
      number: firstDay.getDate(),
      selected: firstDay.toDateString(),
      year: firstDay.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <div className="table-content">
      {currentDays.map((day, index) => {
        return (
          <div
            key={index}
            className={
              "calendar-day" +
              (day.currentMonth ? " current" : "") +
              (day.selected ? " selected" : "")
            }
            onClick={() => changeCurrentDay(day)}
          >
            {day.number.toString()}
          </div>
        );
      })}
    </div>
  );
};

export default Days;
