import React from "react";
import style from "./style.module.css";

export default function Column({ height }) {

  return <div className={style.column} style={{ height: `${height}px` }}></div>;
}
