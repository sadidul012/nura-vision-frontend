import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowItWorks: React.FC = () => {
  const steps = [
    { title: "Step 1", text: "Capture a single photo or start a video stream." },
    { title: "Step 2", text: "Send it to our API for real-time verification." },
    { title: "Step 3", text: "Get instant response: live or spoof detected." },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row>
          {steps.map((step, idx) => (
            <Col md={4} className="mb-3" key={idx}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
