import React from "react";
import "../style/index.css";
import Day from "./Day";
import { dates } from "../store/reducers/calendarSlice";
import { useSelector } from "react-redux";

const Days = () => {
  const currentDays = useSelector(dates);

  return (
    <div className="table-content d-flex flex-wrap flex-grow-1 justify-content-center">
      {currentDays.map((day, index) => {
        return <Day key={index} day={day} />;
      })}
    </div>
  );
};

export default Days;
