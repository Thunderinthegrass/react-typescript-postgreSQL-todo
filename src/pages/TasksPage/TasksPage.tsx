import React from "react";
import styles from "./TasksPage.module.scss";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Tasks from "../../components/Tasks/Tasks";

const TasksPage = () => {
  return (
    <>
    <Title />
    <div className={styles.container}>
      <input className={styles.addInput} type="text" placeholder="Название задачи" />
      <div className={styles.buttonWrapper}>
        <Button color='#004225' text='Очистить' onClick={()=>{}} />
        <Button color='#004225' text='Добавить' onClick={()=>{}} />
      </div>
      <Tasks />
    </div>
    </>
  )
}

export default TasksPage;