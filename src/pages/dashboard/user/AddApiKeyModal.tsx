import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";

interface AddApiKeyModalProps {
    show: boolean;
    onClose: () => void;
    onSave: (keyName: string, restrictions: string) => void;
}

const AddApiKeyModal: React.FC<AddApiKeyModalProps> = ({show, onClose, onSave}) => {
    const [keyName, setKeyName] = useState("");
    const [restrictions, setRestrictions] = useState("");

    const handleSave = () => {
        if (keyName.trim()) {
            onSave(keyName, restrictions);
            setKeyName("");
            setRestrictions("");
            onClose();
        }
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Generate New API Key</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Key Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. My Web App"
                            value={keyName}
                            onChange={(e) => setKeyName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Restrictions (Optional)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. IP 192.168.1.1, Domain example.com"
                            value={restrictions}
                            onChange={(e) => setRestrictions(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            You can restrict key usage by IP, domain, or leave empty for unrestricted.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Generate Key
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddApiKeyModal;
