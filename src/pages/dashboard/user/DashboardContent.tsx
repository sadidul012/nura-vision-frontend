import React from "react";
import {Container, Row, Col, Card, Table, Button, ProgressBar} from "react-bootstrap";
import {FaKey, FaDollarSign, FaChartBar} from "react-icons/fa";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

// Register required components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const UserDashboardContent: React.FC = () => {
    // Example usage data
    const usageData = {
        labels: ["Sep 26", "Sep 27", "Sep 28", "Sep 29", "Sep 30", "Oct 1", "Oct 2"],
        datasets: [
            {
                label: "API Calls",
                data: [120, 150, 180, 220, 190, 250, 300],
                fill: false,
                borderColor: "#007bff",
                tension: 0.3,
            },
            {
                label: "Cost ($)",
                data: [5, 6, 7, 8, 7, 10, 12],
                fill: false,
                borderColor: "#28a745",
                tension: 0.3,
            },
        ],
    };


    return (
        <Container className="p-4">
            {/* Top Summary */}
            <Row className="mb-4">
                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            {
                                // @ts-ignore
                                <FaDollarSign size={30} className="text-success"/>
                            }
                            <h5 className="mt-2">Current Balance</h5>
                            <h3>$123.45</h3>
                            <small className="text-muted">Updated 5 mins ago</small>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Body>

                            {
                                // @ts-ignore
                                <FaChartBar size={30} className="text-primary"/>
                            }
                            <h5 className="mt-2">Total API Calls (Today)</h5>
                            <h3>2,340</h3>
                            <ProgressBar now={75} label="75%" className="mt-2"/>
                            <small className="text-muted">Daily limit: 3,000 calls</small>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Body>

                            {
                                // @ts-ignore
                                <FaChartBar size={30} className="text-warning"/>
                            }
                            <h5 className="mt-2">Cost (Today)</h5>
                            <h3>$12.50</h3>
                            <small className="text-muted">Estimated billing</small>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* API Keys Table */}
            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">
                                {
                                    // @ts-ignore
                                    <FaKey className="me-2"/>
                                }
                                Your API Keys
                            </h5>
                            <Button variant="primary" size="sm">Generate New Key</Button>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>API Key</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>sk_live_1234567890abcdef</td>
                                    <td><span className="badge bg-success">Active</span></td>
                                    <td>2025-09-20</td>
                                    <td>
                                        <Button size="sm" variant="outline-secondary" className="me-2">Copy</Button>
                                        <Button size="sm" variant="outline-danger">Revoke</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>sk_test_abcdef1234567890</td>
                                    <td><span className="badge bg-warning text-dark">Limited</span></td>
                                    <td>2025-08-10</td>
                                    <td>
                                        <Button size="sm" variant="outline-secondary" className="me-2">Copy</Button>
                                        <Button size="sm" variant="outline-danger">Revoke</Button>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Usage Chart */}
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header>Daily Usage Overview</Card.Header>
                        <Card.Body>
                            <Line data={usageData}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UserDashboardContent;
