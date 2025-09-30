// src/pages/Features.tsx
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ShieldLock, LightningCharge, People, Code, ShieldCheck} from "react-bootstrap-icons";

const Features: React.FC = () => {
    const features = [
        {
            icon: <ShieldLock size={40} className="text-primary mb-3"/>,
            title: "Single Image Liveness Detection",
            description:
                "Verify a real user in under a second using just one image. Lightweight yet powerful — no extra hardware or video stream required.",
        },
        {
            icon: <LightningCharge size={40} className="text-warning mb-3"/>,
            title: "Ultra-Fast Processing",
            description:
                "Responses in milliseconds, optimized for high-traffic platforms such as fintech apps, e-learning portals, and online exams.",
        },
        {
            icon: <People size={40} className="text-success mb-3"/>,
            title: "Bias-Reduced AI",
            description:
                "Trained on diverse global datasets to reduce bias across ethnicity, lighting conditions, and age groups.",
        },
        {
            icon: <Code size={40} className="text-info mb-3"/>,
            title: "Seamless Integration",
            description:
                "RESTful API with detailed docs and SDKs. Works across web, iOS, and Android. Add liveness detection with just a few lines of code.",
        },
        {
            icon: <ShieldCheck size={40} className="text-danger mb-3"/>,
            title: "Secure & Compliant",
            description:
                "We process images on secure servers without permanent storage. Built with GDPR, HIPAA, and SOC2 in mind.",
        },
    ];

    return (
        <>
            <div className="features-page py-5 bg-light">
                <Container>
                    <h1 className="text-center fw-bold mb-5">
                        Why Choose <span className="text-primary">Our API</span>?
                    </h1>

                    {features.map((feature, index) => (
                        <Row
                            key={index}
                            className={`align-items-center mb-5 ${
                                index % 2 === 1 ? "flex-row-reverse" : ""
                            }`}
                        >
                            <Col md={6} className="text-center">
                                {feature.icon}
                            </Col>
                            <Col md={6}>
                                <h3 className="fw-semibold">{feature.title}</h3>
                                <p className="text-muted">{feature.description}</p>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>

            <section id="contact" className="py-5 bg-dark text-light text-center py-5 mt-5">
                <Container>
                    <h2 className="fw-bold">Ready to integrate liveness detection?</h2>
                    <p className="mb-4">
                        Start verifying real users today with our simple and secure API.
                    </p>
                    <a href="/pricing" className="btn btn-light btn-lg px-4 rounded-pill shadow-sm">
                        Get Started
                    </a>
                </Container>
            </section>
        </>


    );
};

export default Features;
