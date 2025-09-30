import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {FaCamera, FaVideo, FaLock} from 'react-icons/fa';

const Features: React.FC = () => {
    const features = [
        {
            // @ts-ignore
            icon: <FaCamera size={40}/>,
            title: "Single Image Check",
            description: "Instantly detect liveliness with just one photo."
        },
        {
            // @ts-ignore
            icon: <FaVideo size={40}/>,
            title: "Video Stream",
            description: "Perform real-time verification from a webcam or phone."
        },
        {
            // @ts-ignore
            icon: <FaLock size={40}/>,
            title: "Secure & Fast",
            description: "High accuracy with strict privacy compliance."
        },
    ];

    return (
        <section id="features" className="py-5 bg-light">
            <Container>
                <h2 className="text-center fw-bold mb-5">Powerful Features</h2>
                <Row>
                    {features.map((f, idx) => (
                        <Col md={4} key={idx}>
                            <Card className="h-100 text-center border-0 shadow-sm p-4 hover-card">
                                <div className="mb-3 text-primary">{f.icon}</div>
                                <Card.Title className="fw-bold">{f.title}</Card.Title>
                                <Card.Text className="text-muted">{f.description}</Card.Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
