import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editTask: false,
    data: {}
}

const editTaskSlice = createSlice({
  name: "edit",
  initialState: initialState,
  reducers: {
    editItem: (state, action) => {
      return {
        editTask: true,
        data: action.payload
      };
    },
    clearEdit: () => {
        return {
            editTask: false,
            data: {}
        }
    }
  },
});

export const { editItem, clearEdit} = editTaskSlice.actions;

export default editTaskSlice.reducer;
