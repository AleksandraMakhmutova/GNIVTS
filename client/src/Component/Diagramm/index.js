import React, { useState, useEffect } from "react";
import Column from "../Column";
import InfoPart from "../InfoPart";
import style from "./style.module.css";

export default function Diagramm() {
  const [fakeInfo, setFakeInfo] = useState(null);
  const [fakeInfo2, setFakeInfo2] = useState(null);
  const [chooseItem, setChooseItem] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((json) => setFakeInfo(json));
    fetch("https://jsonplaceholder.typicode.com/comments?postId=2")
      .then((response) => response.json())
      .then((json) => setFakeInfo2(json));
  }, []);

  const handleChooseItem = (email) => {
    fakeInfo.map((el) => {
      if (el.email === email) {
        setChooseItem([el]);
      }
    });
    fakeInfo2.map((el) => {
      if (el.email === email) {
        setChooseItem([el]);
      }
    });
  };

  return (
    <>
      <div className={style.conteiner}>
        {fakeInfo &&
          fakeInfo.map((el) => (
            <Column
              height={el.body.length}
              key={el.name.length}
              id={el.email}
              handleChooseItem={handleChooseItem}
            />
          ))}
        {fakeInfo2 &&
          fakeInfo2.map((el) => (
            <Column
              height={el.body.length}
              key={el.name.length}
              id={el.email}
              handleChooseItem={handleChooseItem}
            />
          ))}
      </div>
      <InfoPart info={chooseItem && chooseItem} />
    </>
  );
}
