import React from "react";
import Task from "./Task";

import styles from './Tasks.module.css'

const Tasks = () => {
  return <div className={styles.tasksWrapper}>
    <Task />
  </div>;
};

export default Tasks;
