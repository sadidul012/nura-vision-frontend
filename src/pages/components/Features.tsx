import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features: React.FC = () => {
  const features = [
    { title: "Single Image Check", description: "Detect liveliness using just one image." },
    { title: "Video Stream", description: "Real-time verification from video streams." },
    { title: "Secure & Fast", description: "High accuracy and privacy-friendly API." },
  ];

  return (
    <section id="features" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Features</h2>
        <Row>
          {features.map((feature, idx) => (
            <Col md={4} className="mb-3" key={idx}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
