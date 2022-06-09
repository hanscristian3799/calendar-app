import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //This is what en event should looks like
  // {
  //   id: 1,
  //   date: "8 June 2022",
  //   name: "Gathering",
  //   time: "09.00",
  //   invitees: ["person1@gmail.com", "person2@gmail.com", "person3@gmail.com"]
  // }
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
export const events = (state) => state.calendar.events;

export default calendarSlice.reducer;
