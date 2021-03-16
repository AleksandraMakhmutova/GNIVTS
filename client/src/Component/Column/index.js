import React from "react";
import style from "./style.module.css";

export default function Column({ height, handleChooseItem, id }) {
  const clickColumn = () => {
    handleChooseItem(id);
  };
  return (
    <div
      className={style.column}
      style={{ height: `${height}px` }}
      onClick={clickColumn}
    ></div>
  );
}
