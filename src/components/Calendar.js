import React, { useEffect } from "react";
import Days from "./Days";
import { setDates, selectedDate } from "../store/reducers/calendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { days } from "../helpers/datas/calendar";
import "../style/calendar.css";

const Calendar = () => {
  const dispatch = useDispatch();
  const currentMonth = useSelector(selectedDate);
  let firstDay = new Date(currentMonth.year, currentMonth.month, 1);
  let weekOfFirstDay = firstDay.getDay() - 1;
  let currentDays = [];

  useEffect(() => {
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
        date: new Date(firstDay).toDateString(),
        month: firstDay.getMonth(),
        number: firstDay.getDate(),
        selected: firstDay.toDateString() === currentMonth.date,
        year: firstDay.getFullYear(),
        events: [],
      };

      currentDays.push(calendarDay);

      if (day === 41) {
        dispatch(setDates(currentDays));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth]);

  return (
    <div className="my-3 me-5">
      <div className="calendar d-flex flex-column align-items-center justify-content-center">
        <div className="calendar-header d-flex align-items-center justify-content-center">
          <h2>June 2022</h2>
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
          <Days />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
