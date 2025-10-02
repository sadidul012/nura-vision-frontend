import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartCard: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Visitors",
        data: [120, 200, 150, 300, 250, 400],
        borderColor: "#0d6efd",
        backgroundColor: "rgba(13,110,253,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <Card className="shadow-sm border-0">
      <Card.Body>
        <h6 className="fw-bold mb-3">Traffic Overview</h6>
        <Line data={data} />
      </Card.Body>
    </Card>
  );
};

export default ChartCard;
