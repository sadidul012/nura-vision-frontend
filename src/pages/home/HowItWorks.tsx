import {Container, Row, Col, Card} from "react-bootstrap";
import {FaUserCheck, FaCamera, FaBrain, FaCheckCircle} from "react-icons/fa";

const HowItWorks = () => {

    const steps = [
        {
            title: "1. User Enrollment",
            description: "A user captures a single selfie image or short video to register their identity securely.",
            // @ts-ignore
            icon: <FaUserCheck size={40} className="text-primary"/>
        },
        {
            title: "2. Image / Video Capture",
            description: "When verification is needed, the user provides a live selfie or a video stream for analysis.",
            // @ts-ignore
            icon: <FaCamera size={40} className="text-success"/>
        },
        {
            title: "3. AI-Based Analysis",
            description: "Our deep learning model detects liveness and prevents spoofing attacks such as photos, masks, or replays.",
            // @ts-ignore
            icon: <FaBrain size={40} className="text-danger"/>
        },
        {
            title: "4. Instant Verification",
            description: "Within seconds, the system confirms authenticity and grants secure access.",
            // @ts-ignore
            icon: <FaCheckCircle size={40} className="text-warning"/>
        }
    ];

    return (
        <section className="py-5" id="how-it-works">
            <Container>
                <h2 className="text-center mb-5 fw-bold">How It Works</h2>
                <Row className="g-4">
                    {steps.map((step, idx) => (
                        <Col md={6} lg={3} key={idx}>
                            <Card className="h-100 text-center border-0 shadow-sm hover-zoom">
                                <div className="mt-4 mb-3">{step.icon}</div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">{step.title}</Card.Title>
                                    <Card.Text>{step.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default HowItWorks;
