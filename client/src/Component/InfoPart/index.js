import React from "react";
import style from "./style.module.css";

import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function InfoPart({ info }) {
  return (
    <div className={style.infoBlock}>
      {info.length ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{info[0].email}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {info[0].name}
            </Card.Subtitle>
            <Card.Text>{info[0].body}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <h3>Click on the column</h3>
      )}
    </div>
  );
}
