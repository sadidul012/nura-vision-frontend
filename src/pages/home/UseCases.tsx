import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UseCases: React.FC = () => {
  const cases = [
    { title: "Telehealth", text: "Verify patients are live during virtual appointments." },
    { title: "Online Exams", text: "Prevent cheating in remote test environments." },
    { title: "Fintech & Banking", text: "Ensure real users for KYC and onboarding." },
    { title: "Web3 & Identity", text: "Decentralized identity checks for dApps." },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Use Cases</h2>
        <Row>
          {cases.map((uc, idx) => (
            <Col md={3} sm={6} className="mb-3" key={idx}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>{uc.title}</Card.Title>
                  <Card.Text>{uc.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default UseCases;
