import React from "react";
import styles from "./BaseButton.module.css";

const BaseButton = ({ type, children, ...props }) => {
  const buttonClass = styles[type] || "";

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
