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
        <a className="shadow btn btn-lg me-3 btn-light" href={"/demo"}>
          Try Demo
        </a>
        <a className="shadow btn btn-lg btn-outline-light" href={"/pricing"}>
          View Pricing
        </a>
      </Container>
    </section>
  );
};

export default Hero;
