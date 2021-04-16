import React from "react";
import { Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const OutOfGrillList = () => {
  const outOfGrillItems = useSelector((state) => state.outOfGrill);

  if (outOfGrillItems.length === 0) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>All the items fits the grill</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Items out of grill</Card.Title>
        <Table size="small">
          <thead>
            <tr>
              <th>Type</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {outOfGrillItems.map((element) => {
              return (
                <tr key={`${element.x}-${element.y}`}>
                  <td>{element.item.title}</td>
                  <td>{element.width} x {element.height}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default OutOfGrillList;
