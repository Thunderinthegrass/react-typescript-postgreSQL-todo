import React from "react";
import styles from "./Task.module.scss";
import svgIcons from './../../../img/icons.svg';

const Task = () => {
  return (
    <li className={styles.taskItem}>
      <input type="checkbox" id="input-checkbox" className={styles.checkbox} />
      <label htmlFor="input-checkbox" className={styles.checkboxLabel}></label>
      <h3>Название задачи</h3>
      <button className={styles.button}>
        <svg class={styles.svgIcon}>
          <use xlinkHref={`${svgIcons}#close`}></use>
        </svg>
      </button>
    </li>
  )
}

export default Task;