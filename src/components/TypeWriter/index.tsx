import React from "react";
import styles from "./TypeWriter.module.scss";
type Props ={
  children?:any;
}

const TypewriterAnimation = ({children, ...props}: Props) => {
  return <div className={styles.typewriter} {...props}>{children}</div>;
};

export default TypewriterAnimation;