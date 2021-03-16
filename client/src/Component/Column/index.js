import React from "react";
import style from "./style.module.css";

export default function Column({ height, key }) {
  return (
    <div
      key={key}
      className={style.column}
      style={{ height: `${height}px` }}
    ></div>
  );
}
