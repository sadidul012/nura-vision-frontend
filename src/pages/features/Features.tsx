// src/pages/Features.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features: React.FC = () => {
  const features = [
    {
      title: "Single Image Liveness Detection",
      description:
        "Check if a user is real using just one image. Perfect for quick authentication and signup processes.",
    },
    {
      title: "High Accuracy AI Model",
      description:
        "Our AI model is trained with diverse datasets to ensure robust performance across different lighting and skin tones.",
    },
    {
      title: "Fast Response",
      description:
        "Get results in milliseconds, making it ideal for high-traffic applications like online exams or banking.",
    },
    {
      title: "Secure and Private",
      description:
        "Images are processed securely and not stored on our servers, ensuring user privacy and compliance.",
    },
    {
      title: "Easy Integration",
      description:
        "Integrate our API with just a few lines of code. Supports multiple platforms and languages.",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Features</h1>
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
