import React from "react";
import "../style/index.css";
import Day from "./Day";
import {
  setSelectedDate,
  dates,
  selectedDate,
} from "../store/reducers/calendarSlice";
import { useDispatch, useSelector } from "react-redux";

const Days = () => {
  const dispatch = useDispatch();
  const currentDays = useSelector(dates);
  const currentDay = useSelector(selectedDate);

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
          </Day>
        );
      })}
    </div>
  );
};

export default Days;
