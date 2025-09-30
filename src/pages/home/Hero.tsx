import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section className="text-center bg-light py-5">
      <Container>
        <h1 className="mb-3">Real-time Liveliness Check API</h1>
        <p className="mb-4">
          Verify if a user is alive using a single image or video stream. Ideal for telehealth, online exams, and security.
        </p>
        <Button variant="primary" size="lg">Try Demo</Button>
      </Container>
    </section>
  );
};

export default Hero;
