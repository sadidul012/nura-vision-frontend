import {Container, Row, Col, Card} from "react-bootstrap";
import {FaGraduationCap, FaUserShield, FaStethoscope, FaLaptopCode} from "react-icons/fa";

const UseCases = () => {

    const cases = [
        {
            title: "E-Learning & Exams",
            description:
                "Prevent cheating in online exams with real-time liveness detection and secure student identity verification.",
            // @ts-ignore
            icon: <FaGraduationCap size={40} className="text-primary"/>
        },
        {
            title: "Financial Services",
            description:
                "Secure onboarding and KYC verification for banking and fintech apps, reducing fraud and identity theft.",
            // @ts-ignore
            icon: <FaUserShield size={40} className="text-success"/>
        },
        {
            title: "Telehealth",
            description:
                "Ensure verified patient-doctor video sessions by preventing spoofing with AI-based liveness checks.",
            // @ts-ignore
            icon: <FaStethoscope size={40} className="text-danger"/>
        },
        {
            title: "Web3 & Crypto",
            description:
                "Strengthen wallet sign-ins and decentralized app interactions with secure, biometric-based verification.",
            // @ts-ignore
            icon: <FaLaptopCode size={40} className="text-warning"/>
        }
    ];

    return (
        <section className="py-5 bg-light" id="use-cases">
            <Container>
                <h2 className="text-center mb-5 fw-bold">Use Cases</h2>
                <Row>
                    {cases.map((uc, idx) => (
                        <Col md={6} lg={3} className="mb-4" key={idx}>
                            <Card className="h-100 shadow-sm border-0 text-center p-3 hover-zoom">
                                <div className="mb-3">{uc.icon}</div>
                                <Card.Title className="fw-bold">{uc.title}</Card.Title>
                                <Card.Text>{uc.description}</Card.Text>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default UseCases;
