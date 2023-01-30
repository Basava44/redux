import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteMethod,
  getMethod,
  postMethod,
  putMethod,
} from "../../utilityFunctions";

const initialState = {
  isLoading: false,
  tasks: [],
};

export const getTasks = createAsyncThunk("tasks/getTasks", () => {
  return getMethod().then((res) => {
    return res.data;
  });
});

export const addTask = createAsyncThunk("tasks/addNewTask", (task) => {
  return postMethod({ name: task, completed: false });
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", (id) => {
  console.log(id);
  return deleteMethod(id);
});

export const completeTask = createAsyncThunk("task/completeTask", (data) => {
  return putMethod(data);
});

export const updateTask = createAsyncThunk("tasks/updateTask", (data) => {
  return putMethod(data);
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.isLoading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    [getTasks.rejected]: (state) => {
      state.isLoading = false;
    },
    [addTask.pending]: (state) => {
      state.isLoading = true;
    },
    [addTask.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [addTask.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteTask.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTask.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteTask.rejected]: (state) => {
      state.isLoading = false;
    },
    [completeTask.pending]: (state) => {
      state.isLoading = true;
    },
    [completeTask.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [completeTask.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateTask.pending]: (state) => {
      state.isLoading = true;
    },
    [updateTask.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.forEach((task, index, tasks) => {
        if (task.id === action.payload.id) {
          tasks[index] = action.payload;
        }
      });
    },
    [updateTask.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default tasksSlice.reducer;
