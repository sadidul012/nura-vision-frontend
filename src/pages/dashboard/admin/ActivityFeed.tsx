import React from "react";
import { ListGroup } from "react-bootstrap";

const ActivityFeed: React.FC = () => {
  const activities = [
    "Alice signed in",
    "New order placed",
    "Server restarted",
    "Payment received from Bob",
  ];

  return (
    <ListGroup className="shadow-sm">
      {activities.map((activity, idx) => (
        <ListGroup.Item key={idx}>{activity}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ActivityFeed;
