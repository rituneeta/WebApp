import React from "react";
import Card from "react-bootstrap/Card";
import "./item.css";

function Item(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ color: "blue" }}>{props.item.title}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;
