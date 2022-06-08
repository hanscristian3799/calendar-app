import { configureStore } from "@reduxjs/toolkit";
import calendarSlice from "./reducers/calendarSlice";

const store = configureStore({
  reducer: {
    calendar: calendarSlice,
  },
});

export default store;
