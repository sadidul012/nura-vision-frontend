import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {FaUserPlus, FaCheckCircle} from "react-icons/fa";

const Content: React.FC = () => {
    // @ts-ignore
    const VerifyIcon = <FaCheckCircle/>;
    // @ts-ignore
    const EnrollIcon = <FaUserPlus/>;
    return (
        <Container className="mt-5">
            {/* Instructions Section */}
            <Row className="g-4">
                <Col md={6}>
                    <Card className="shadow-lg h-100 border-0">
                        <Card.Body>
                            <h3 className="mb-3 text-primary">
                                {EnrollIcon} Enrollment Instructions
                            </h3>
                            <ul className="text-start">
                                <li>Ensure your face is clearly visible in good lighting.</li>
                                <li>Remove sunglasses, masks, or other obstructions.</li>
                                <li>Click the "Enrollment" button above to start.</li>
                                <li>Your face will be securely stored for verification.</li>
                            </ul>
                            <p className="mt-3 text-muted">
                                🔒 All data is encrypted and used only for liveliness verification.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="shadow-lg h-100 border-0">
                        <Card.Body>
                            <h3 className="mb-3 text-success">
                                {VerifyIcon} Verification Instructions
                            </h3>
                            <ul className="text-start">
                                <li>Make sure you are in a well-lit environment.</li>
                                <li>Click the "Verify" button above to begin.</li>
                                <li>The system will compare your face with enrolled data.</li>
                                <li>You will instantly get a success or failure result.</li>
                            </ul>
                            <p className="mt-3 text-muted">
                                ✅ Works best when your face matches the enrolled profile closely.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Content;
