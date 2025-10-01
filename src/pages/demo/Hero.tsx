import React from 'react';
import {Button, Container} from 'react-bootstrap';
import {FaCheckCircle, FaUserPlus} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


const Hero: React.FC = () => {
    const navigate = useNavigate();
    // @ts-ignore
    const VerifyIcon = <FaCheckCircle/>;
    // @ts-ignore
    const EnrollIcon = <FaUserPlus/>;

    return (
        <section
            className="d-flex align-items-center text-center text-light"
            style={{
                minHeight: "40vh",
                background: "linear-gradient(135deg, #007bff, #6610f2)",
            }}
        >
            <Container>
                <h1 className="display-3 fw-bold mb-4">
                    Real-time Liveliness Check Demo
                </h1>
                <p className="lead mb-5">
                    Try out our enrollment and verification process below.
                    Follow the instructions carefully for best results.
                </p>

                <div className="d-flex justify-content-center gap-3 mt-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="d-flex align-items-center gap-2 px-4"
                        onClick={() => navigate("/demo/enroll")}
                    >
                        {EnrollIcon} Enrollment
                    </Button>
                    <Button
                        variant="success"
                        size="lg"
                        className="d-flex align-items-center gap-2 px-4"
                        onClick={() => navigate("/demo/verify")}
                    >
                        {VerifyIcon} Verify
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
