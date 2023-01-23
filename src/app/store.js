import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/tasks/tasksSlice";
import editTaskReducer from '../features/tasks/editTaskSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    editableTask : editTaskReducer
  },
});
