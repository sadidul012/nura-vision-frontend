import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
        <Form className="mx-auto bg-light p-4 rounded shadow" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Send</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
