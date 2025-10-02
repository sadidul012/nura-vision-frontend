import React from "react";
import {Modal, Button} from "react-bootstrap";

interface RevokeApiKeyModalProps {
    show: boolean;
    apiKey: string | null;
    onClose: () => void;
    onConfirm: (apiKey: string) => void;
}

const RevokeApiKeyModal: React.FC<RevokeApiKeyModalProps> = ({show, apiKey, onClose, onConfirm}) => {
    const handleConfirm = () => {
        if (apiKey) {
            onConfirm(apiKey);
            onClose();
        }
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Revoke API Key</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Are you sure you want to <b>revoke</b> this API key?
                </p>
                <p className="bg-light p-2 rounded text-monospace">
                    {apiKey || "No key selected"}
                </p>
                <p className="text-danger small">
                    This action cannot be undone. Any application using this key will immediately stop working.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Revoke Key
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RevokeApiKeyModal;
