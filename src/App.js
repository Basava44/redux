import Input from "./features/tasks/Input";
import styles from "./App.module.css";
import Tasks from "./features/tasks/tasks";
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => {
    return state.tasks;
  });

  const tasksCompleted = () => {
    let count = 0;
    for (const i of tasks)
      if (i.completed) {
        count++;
      }

    return count;
  };

  return (
    <div className={styles.mainWrapper}>
      <h2>Task Manager</h2>
      <Input />
      {tasks.length > 0 ? (
        <Tasks />
      ) : (
        <div className={styles.warning}>No Tasks Found</div>
      )}
      {tasks.length > 0 ? (
        <div className={styles.alignLeft}>{`${tasksCompleted()}/${
          tasks.length
        } Tasks Completed`}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
