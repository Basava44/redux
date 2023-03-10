import React, { useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask as addNewTask } from "./tasksSlice";
import { clearEdit } from "./editTaskSlice";

const Input = () => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const task = useSelector((state) => {
    return state.editableTask;
  });

  useEffect(() => {
    setTaskName(task.data.name);
  }, [task]);

  const addTask = (task) => {
    if (task) {
      dispatch(addNewTask(task));
      setTaskName("");
    }
  };

  const inputHandler = (event) => {
    setTaskName(event.target.value);
  };

  const updateTask = (name) => {
    dispatch(updateTask({ name, completed: false, id: task.data._id }));
    dispatch(clearEdit());
    setTaskName("");
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        placeholder="Enter Task"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                task.editTask ? updateTask(taskName) : addTask(taskName);
              }}
            >
              {task.editTask ? "Edit" : "Add"}
            </Button>
          ),
        }}
        value={taskName}
        fullWidth
        autoComplete="off"
        onChange={inputHandler}
      />
    </>
  );
};

export default Input;
