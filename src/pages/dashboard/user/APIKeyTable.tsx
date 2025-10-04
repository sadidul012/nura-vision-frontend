import React, {useState} from "react";
import {Row, Col, Card, Table, Button} from "react-bootstrap";
import {FaKey} from "react-icons/fa";
import RevokeApiKeyModal from "./RevokeApiKeyModal";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import AddApiKeyModal from "./AddApiKeyModal";
import {useToast} from "../../components/ToastProvider";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const APIKeyTable: React.FC = () => {
    // Example state for API keys
    const [apiKeys, setApiKeys] = useState([
        {key: "sk_live_1234567890abcdef", status: "Active", created: "2025-09-20"},
        {key: "sk_test_abcdef1234567890", status: "Limited", created: "2025-08-10"},
    ]);

    // Revoke modal state
    const [showRevoke, setShowRevoke] = useState(false);
    const [selectedKey, setSelectedKey] = useState<string | null>(null);

    const { showToast } = useToast();

    const handleRevokeKey = (apiKey: string) => {
        // Remove key from list
        setApiKeys(apiKeys.filter((k) => k.key !== apiKey));
        showToast(`API Key ${apiKey} revoked!`, "danger");
    };

    const handleCopy = (apiKey: string) => {
        navigator.clipboard.writeText(apiKey);
        showToast("API Key copied to clipboard!", "success");
    };

    const [showModal, setShowModal] = useState(false);

    const handleSaveKey = (keyName: string, restrictions: string) => {
        console.log("New API Key Requested:", keyName, restrictions);
        // Here you can call your backend API to generate the key
    };
    return (
        <>
            <Row className="mb-4">
                <Col>
                    <Card className="shadow-sm">
                        <Card.Header className="d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">
                                {
                                    // @ts-ignore
                                    <FaKey className="me-2"/>
                                }
                                Your API Keys</h5>
                            <Button onClick={() => setShowModal(true)} variant="primary">
                                + Generate New Key
                            </Button>

                            <AddApiKeyModal
                                show={showModal}
                                onClose={() => setShowModal(false)}
                                onSave={handleSaveKey}
                            />
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover responsive>
                                <thead>
                                <tr>
                                    <th>API Key</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {apiKeys.map((k) => (
                                    <tr key={k.key}>
                                        <td className="text-monospace">{k.key}</td>
                                        <td>
                        <span
                            className={`badge ${
                                k.status === "Active"
                                    ? "bg-success"
                                    : k.status === "Limited"
                                        ? "bg-warning text-dark"
                                        : "bg-secondary"
                            }`}
                        >
                          {k.status}
                        </span>
                                        </td>
                                        <td>{k.created}</td>
                                        <td>
                                            <Button
                                                size="sm"
                                                variant="outline-secondary"
                                                className="me-2"
                                                onClick={() => handleCopy(k.key)}
                                            >
                                                Copy
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline-danger"
                                                onClick={() => {
                                                    setSelectedKey(k.key);
                                                    setShowRevoke(true);
                                                }}
                                            >
                                                Revoke
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* --- Revoke Modal --- */}
            <RevokeApiKeyModal
                show={showRevoke}
                apiKey={selectedKey}
                onClose={() => setShowRevoke(false)}
                onConfirm={handleRevokeKey}
            />
        </>
    );
};

export default APIKeyTable;
