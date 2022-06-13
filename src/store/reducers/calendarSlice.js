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
  selectedDate: {
    currentMonth: false,
    date: new Date().toDateString(),
    month: new Date().getMonth(),
    number: new Date().getDate(),
    selected: true,
    year: new Date().getFullYear(),
    events: [],
  },
  dates: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent(state, action) {
      let findData = state.dates.findIndex((date) => {
        return date.date === action.payload.date.date;
      });
      let findDate = state.dates[findData];
      let findLength = findDate.events.length - 1;

      if (findLength < 4) {
        findDate.events.push(action.payload);
      }
    },
    deleteEvent(state, action) {
      let dateIdx = state.dates.findIndex((date) => {
        return date.date === state.selectedDate.date;
      });

      const find = state.dates[dateIdx];

      if (find) {
        const idx = find.events.findIndex((event) => {
          return event.id === action.payload;
        });
        if (idx > -1) {
          state.dates[dateIdx].events.splice(idx, 1);
        }
      }
    },
    editEvent(state, action) {
      let dateIdx = state.dates.findIndex((date) => {
        return date.date === state.selectedDate.date;
      });

      const find = state.dates[dateIdx];

      if (find) {
        const idx = find.events.findIndex((event) => {
          return event.id === action.payload.id;
        });
        if (idx > -1) {
          state.dates[dateIdx].events[idx] = action.payload;
        }
      }
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setDates(state, action) {
      state.dates = action.payload.slice();
    },
  },
});

export const { addEvent, setSelectedDate, setDates, deleteEvent, editEvent } =
  calendarSlice.actions;

export const selectedDate = (state) => state.calendar.selectedDate;
export const events = (state) => state.calendar.events;
export const dates = (state) => state.calendar.dates;

export default calendarSlice.reducer;
