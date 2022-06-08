import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  selectedDate: {},
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    }
  },
});

export const { addEvent, setSelectedDate } = calendarSlice.actions;

export const selectedDate = (state) => state.calendar.selectedDate;

export default calendarSlice.reducer;
