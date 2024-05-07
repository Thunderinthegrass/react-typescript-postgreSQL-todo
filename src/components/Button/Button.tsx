import React from "react";
import styles from './Button.module.scss';
interface IProps {
  color: string,
  text: string,
  onClick: ()=>void
}

const Button:React.FC<IProps> = ({color,text,onClick}) => 
  <button className={styles.button} style={{borderColor: color, color: color,}} onClick={onClick}>{text}</button>

export default Button;