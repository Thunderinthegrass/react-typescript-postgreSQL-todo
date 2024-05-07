import React from "react";
import styles from "./MainPage.module.scss";
import Title from "../../components/Title/Title";
import svgIcons from './../../img/icons.svg';

const MainPage = () => {
  return (
    <div>
      <Title />
      {/* <svg className={styles.titleArrow}>
        <use xlinkHref={`${svgIcons}#select-arrow`}/>
      </svg> */}
      <p className={styles.subtitle}>Войти или зарегистрироваться</p>
    </div>
  )
}

export default MainPage;