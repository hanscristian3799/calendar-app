import React from "react";
import { setSelectedDate, selectedDate } from "../store/reducers/calendarSlice";
import { useDispatch, useSelector } from "react-redux";

const Day = ({ day }) => {
  const dispatch = useDispatch();
  const currentDay = useSelector(selectedDate);

  const changeCurrentDay = (day) => {
    dispatch(setSelectedDate(day));
  };

  return (
    <div
      className={
        "calendar-day position-relative" +
        (day.currentMonth ? " current" : " day-disabled") +
        (day.number === currentDay.number && day.currentMonth
          ? " selected fw-bolder"
          : "")
      }
      onClick={() => (day.currentMonth ? changeCurrentDay(day) : null)}
    >
      <div className="position-absolute d-flex flex-column w-100 h-100">
        {day.events.map((event, index) => {
          return (
            <div
              key={index}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={`${event.name}`}
              style={{
                background: `#${event.color}`,
                height: `${100 / day.events.length}%`,
                width: "100%",
              }}
            ></div>
          );
        })}
      </div>
      <p>{day.number.toString()}</p>
    </div>
  );
};

export default Day;
