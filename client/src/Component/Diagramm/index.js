import React, { useState, useEffect } from "react";
import Column from "../Column";
import style from "./style.module.css";

export default function Diagramm() {
  const [fakeInfo, setFakeInfo] = useState(null);
  const [fakeInfo2, setFakeInfo2] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((json) => setFakeInfo(json));
    fetch("https://jsonplaceholder.typicode.com/comments?postId=2")
      .then((response) => response.json())
      .then((json) => setFakeInfo2(json));
  }, []);

  return (
    <div className={style.conteiner}>
      {fakeInfo &&
        fakeInfo.map((el) => (
          <Column height={el.body.length} key={el.name.length} />
        ))}
      {fakeInfo2 &&
        fakeInfo2.map((el) => (
          <Column height={el.body.length} key={el.name.length} />
        ))}
    </div>
  );
}
