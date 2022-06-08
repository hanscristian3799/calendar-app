import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/event.css";
import {selectedDate} from "../store/reducers/calendarSlice"

const Events = () => {
  // const { selectedDate } = useSelector((state) => state.calendar.selectedDate);
  const date = useSelector(selectedDate)

  useEffect(() => {
    console.log("SELECTED DATE", date);
  }, [date])


  return <div className="event">{date ? date.date : "NOONE"}</div>;
};

export default Events;
