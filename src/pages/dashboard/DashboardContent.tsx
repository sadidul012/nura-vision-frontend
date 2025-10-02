import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUsers, FaShoppingCart, FaDollarSign, FaChartLine } from "react-icons/fa";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import ActivityFeed from "./ActivityFeed";
import DataTable from "./DataTable";

const DashboardContent: React.FC = () => {
    // @ts-ignore
    const userIcon = <FaUsers size={32}/>
    // @ts-ignore
    const ordersIcon = <FaShoppingCart size={32}/>
    // @ts-ignore
    const revenewIcon = <FaDollarSign size={32}/>
    // @ts-ignore
    const growthIcon = <FaChartLine size={32}/>
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4 bg-light">
        <Container fluid>
          <Row className="mb-4">
            <Col><StatCard title="Users" value="1,245" icon={userIcon} color="primary" /></Col>
            <Col><StatCard title="Orders" value="320" icon={ordersIcon} color="success" /></Col>
            <Col><StatCard title="Revenue" value="$12,400" icon={revenewIcon} color="warning" /></Col>
            <Col><StatCard title="Growth" value="24%" icon={growthIcon} color="danger" /></Col>
          </Row>

          <Row>
            <Col md={8}><ChartCard /></Col>
            <Col md={4}><ActivityFeed /></Col>
          </Row>

          <Row className="mt-4">
            <Col><DataTable /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DashboardContent;
