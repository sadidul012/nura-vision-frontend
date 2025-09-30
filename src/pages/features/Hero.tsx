import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const Hero: React.FC = () => {
    return (
        <>
            <section className="hero-section text-white bg-dark text-center d-flex align-items-center p-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <h1 className="fw-bold display-5 mb-3">
                                Powerful Features for Modern Authentication
                            </h1>
                            <p className="lead mb-4">
                                Discover how our liveness detection API helps you secure users,
                                fight fraud, and integrate seamlessly with your app.
                            </p>
                            <a
                                href="/pricing"
                                className="btn btn-light btn-lg px-4 rounded-pill shadow-sm"
                            >
                                Get Started
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;
