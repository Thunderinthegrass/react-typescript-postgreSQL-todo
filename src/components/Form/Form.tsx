import React from "react";
import styles from "./Form.module.scss";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

const Form = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Вход</h2>
      <FormInput value={"#"} type="text" />
      <FormInput value={"#"} type="password" />
      <FormButton onClick={() => {}} text="Войти" />
      <button className={styles.button} onClick={() => {}}>Зарегистрироваться</button>
    </form>
  );
};

export default Form;
