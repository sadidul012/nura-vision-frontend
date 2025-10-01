import React from "react";
import {Container} from "react-bootstrap";

const GetStarted: React.FC = () => {
    return (
        <>
            <section id="contact" className="py-5 bg-dark text-light text-center py-5 mt-5">
                <Container>
                    <h2 className="fw-bold">Ready to integrate liveness detection?</h2>
                    <p className="mb-4">
                        Start verifying real users today with our simple and secure API.
                    </p>
                    <a href="/register" className="btn btn-light btn-lg px-4 rounded-pill shadow-sm">
                        Get Started
                    </a>
                </Container>
            </section>
        </>
    );
};

export default GetStarted;
