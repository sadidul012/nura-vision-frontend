import React from "react";
import { Card } from "react-bootstrap";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <Card className="shadow-sm border-0">
      <Card.Body className="d-flex align-items-center">
        <div className={`me-3 text-${color || "primary"}`}>{icon}</div>
        <div>
          <h6 className="text-muted">{title}</h6>
          <h4 className="fw-bold">{value}</h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatCard;
