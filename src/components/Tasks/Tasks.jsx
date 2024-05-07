import React from "react";
import styles from "./Tasks.module.scss";
import Task from "./Task/Task";

const Tasks = () => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  )
}

export default Tasks;