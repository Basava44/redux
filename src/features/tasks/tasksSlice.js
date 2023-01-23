import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "work",
    completed: false,
    id: "1232r",
  },
  {
    name: "work",
    completed: false,
    id: "123r",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return [action.payload, ...state];
    },
    update: (state, action) => {
      state.forEach((task, index, tasks) => {
        if (task.id === action.payload.id) {
          tasks[index] = action.payload;
        }
      });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      state.forEach((task, index, tasks) => {
        if (task.id === action.payload.id) {
          tasks[index] = action.payload;
        }
      });
    },
  },
});

export const { add, update, deleteTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
