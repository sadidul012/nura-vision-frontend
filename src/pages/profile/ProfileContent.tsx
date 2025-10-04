import React from "react";
import {Container, Row, Col, Card, ListGroup, Button} from "react-bootstrap";
import {FaGoogle, FaGithub, FaWallet, FaUser} from "react-icons/fa";


const ProfileContent: React.FC = () => {
    const name = "Profile";
    const email = "Profile";
    const username = "Profile";
    const googleLinked = "Profile";
    const githubLinked = "Profile";
    const solanaWallet = "Profile";
    const algoWallet = "Profile";

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-3">
                        <Card.Body>
                            {/* Header */}
                            <div className="text-center mb-4">
                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto"
                                    style={{width: 80, height: 80, fontSize: "2rem"}}>

                                    {
                                        // @ts-ignore
                                        <FaUser/>
                                    }
                                </div>
                                <h3 className="mt-3">{name}</h3>
                                <p className="text-muted mb-0">@{username}</p>
                                <p className="text-muted small">{email}</p>
                            </div>

                            {/* Linked Accounts */}
                            <h5 className="mb-3">Linked Accounts</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>
                      {
                          // @ts-ignore
                          <FaGoogle className="text-danger me-2"/>
                      }
                                        Google</span>
                                    {googleLinked ? (
                                        <BadgeStatus text="Connected" variant="success"/>
                                    ) : (
                                        <Button size="sm" variant="outline-secondary">Connect</Button>
                                    )}
                                </ListGroup.Item>

                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <span>
                      {
                          // @ts-ignore
                          <FaGithub className="me-2"/>
                      }
                                        GitHub</span>
                                    {githubLinked ? (
                                        <BadgeStatus text="Connected" variant="success"/>
                                    ) : (
                                        <Button size="sm" variant="outline-secondary">Connect</Button>
                                    )}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <span>
                      {
                          // @ts-ignore
                          <FaWallet className="me-2 text-warning"/>
                      }
                                        Solana Wallet</span>
                                    <div className="mt-1 small text-muted">
                                        {solanaWallet ? solanaWallet : "Not Connected"}
                                    </div>
                                </ListGroup.Item>

                                <ListGroup.Item>
                  <span>
                      {
                          // @ts-ignore
                          <FaWallet className="me-2 text-info"/>
                      }
                      Algorand Wallet</span>
                                    <div className="mt-1 small text-muted">
                                        {algoWallet ? algoWallet : "Not Connected"}
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

// Small helper for showing status
const BadgeStatus: React.FC<{ text: string; variant: string }> = ({text, variant}) => (
    <span className={`badge bg-${variant}`}>{text}</span>
);

export default ProfileContent;
