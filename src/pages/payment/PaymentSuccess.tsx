// src/components/PaymentSuccess.tsx
import React from "react";
import {Button} from "react-bootstrap";
import {FaCheckCircle} from "react-icons/fa";

interface PaymentSuccessProps {
    selectedMethod: string;
    transactionId: string;
    amountUSD: number;
    amountCoin: number;
    amountToken: number;
    onReset: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({selectedMethod, transactionId, onReset, amountCoin, amountUSD, amountToken}) => {
    return (
        <div className="text-center p-4">
            {
                // @ts-ignore
                <FaCheckCircle size={70} className="text-success mb-3"/>
            }

            <h3 className="fw-bold mb-3">Payment Successful!</h3>
            <p className="text-muted mb-3">
                Your payment via <strong>{selectedMethod}</strong> has been processed.
            </p>

            <div className="text-start bg-light p-3 rounded-3 mb-3">
                <p><strong>Transaction ID:</strong> {transactionId}</p>
                <p><strong>Amount:</strong> {amountCoin} {selectedMethod === "Solana" ? "SOL" : "ALGO"} ({amountUSD} USD)</p>
                <p><strong>Purchased:</strong> {amountToken} Tokens</p>
                <p><strong>Status:</strong> Confirmed</p>
            </div>

            <Button
                variant="primary"
                className="w-100"
                onClick={onReset}
            >
                Make Another Payment
            </Button>
        </div>
    );
};

export default PaymentSuccess;
