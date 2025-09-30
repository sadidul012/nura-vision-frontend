import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

const PricingCard: React.FC = () => {
    const plans = [
        {
            title: "Free",
            price: "$0",
            features: ["100 API calls", "Community support"],
            button: "Get Started",
            highlight: false
        },
        {
            title: "Pro",
            price: "$49/mo",
            features: ["10k API calls", "Email support"],
            button: "Subscribe",
            highlight: true
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: ["Unlimited calls", "Dedicated support"],
            button: "Contact Us",
            highlight: false
        },
    ];
    return (
        <>
            <Row className="justify-content-center">
                {plans.map((plan, idx) => (
                    <Col md={4} className="mb-4" key={idx}>
                        <Card
                            className={`h-100 text-center shadow-sm border-0 ${plan.highlight ? "border-primary border-3" : ""}`}>
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold">{plan.title}</Card.Title>
                                <h2 className="my-3">{plan.price}</h2>
                                <ul className="list-unstyled mb-4">
                                    {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                                <Button variant={plan.highlight ? "primary" : "outline-primary"}>{plan.button}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default PricingCard;
