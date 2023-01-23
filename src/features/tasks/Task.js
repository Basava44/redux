import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { deleteTask as removeTask, completeTask } from "./tasksSlice";
import { editItem } from "./editTaskSlice";

import styles from "./Task.module.css";

const Task = () => {
  const tasks = useSelector((state) => {
    return state.tasks;
  });
  const dispatch = useDispatch();

  const deleteTask = (task) => {
    dispatch(removeTask(task));
  };

  const editTask = (task) => {
    console.log(task);
    dispatch(editItem(task))
  };

  const taskCompleted = (task) => {
    dispatch(completeTask({ ...task, completed: true }));
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Card
            className={`${styles.item} ${
              task.completed ? styles.taskCompleted : styles.taskIncomplete
            }`}
            key={task.id}
          >
            <CardContent sx={{ padding: "4px !important" }}>
              {task.name}
            </CardContent>
            <CardActions>
              {task.completed ? (
                <DoneAllIcon
                  color="disabled"
                  fontSize="small"
                  className={styles.icon}
                  style={{ cursor: "not-allowed" }}
                />
              ) : (
                <DoneIcon
                  color="error"
                  fontSize="small"
                  className={styles.icon}
                  onClick={() => {
                    taskCompleted(task);
                  }}
                />
              )}
              <ModeIcon
                color="primary"
                fontSize="small"
                className={styles.icon}
                onClick={() => {
                  editTask(task);
                }}
              />
              <DeleteIcon
                color="error"
                fontSize="small"
                className={styles.icon}
                onClick={() => {
                  deleteTask(task);
                }}
              />
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Task;
