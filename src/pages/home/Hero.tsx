import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section
      className="d-flex align-items-center text-center text-light"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #007bff, #6610f2)",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold mb-4">
          Real-time Liveliness Check API
        </h1>
        <p className="lead mb-5">
          Verify users in seconds with cutting-edge face liveliness detection.
          Secure • Fast • Reliable
        </p>
        <Button variant="light" size="lg" className="me-3 shadow">
          Try Demo
        </Button>
        <Button variant="outline-light" size="lg" className="shadow">
          View Pricing
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
