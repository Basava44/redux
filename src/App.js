import Input from "./features/tasks/Input";
import styles from "./App.module.css";
import Tasks from "./features/tasks/tasks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTasks } from "./features/tasks/tasksSlice";

import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  const tasksCompleted = () => {
    let count = 0;
    for (const i of tasks.tasks)
      if (i.completed) {
        count++;
      }
    return count;
  };

  const count = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [count]);

  return (
    <div className={styles.mainWrapper}>
      <h2>Task Manager</h2>
      <Input />
      {tasks.isLoading ? <LinearProgress style={{ marginTop: 10 }} /> : ""}
      {tasks.tasks.length > 0 ? (
        <Tasks />
      ) : (
        <div className={styles.warning}>No Tasks Found</div>
      )}
      {tasks.tasks.length > 0 ? (
        <div className={styles.alignLeft}>{`${tasksCompleted()}/${
          tasks.tasks.length
        } Tasks Completed`}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
