import React from "react";
import css from "./ButtonNodes.module.css";

const ButtonNodes = ({ data }) => {
  return (
    <button className={css.button} onClick={data.onClick}>
      {data.label}
    </button>
  );
};

export default ButtonNodes;
