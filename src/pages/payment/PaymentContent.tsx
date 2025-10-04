import React, {useState} from "react";
import {Card} from "react-bootstrap";
import PaymentSelect from "./PaymentSelect";
import PaymentPending from "./PaymentPending";
import PaymentSuccess from "./PaymentSuccess";
import {useToast} from "../components/ToastProvider";

const PaymentPage: React.FC = () => {
    const {showToast} = useToast();
    const [selectedMethod, setSelectedMethod] = useState<string>("");
    const [status, setStatus] = useState<"select" | "pending" | "success">("select");
    const [transactionId, setTransactionId] = useState<string>("");
    const [amount, setAmount] = useState<number>(1000);
    const [totalCostCoin, setTotalCost] = useState<number>(0); // Equivalent tokens for the total amount
    const [totalCostUSD, setTotalUSD] = useState<number>(0); // Equivalent tokens for the total amount

    const handleProceed = () => {
        if (!selectedMethod) {
            showToast("Please select a payment method!", "danger");
            return;
        }

        setStatus("pending");

        // Simulate payment processing delay
        setTimeout(() => {
            setTransactionId(`#TXN${Math.floor(Math.random() * 1000000000)}`);
            setStatus("success");
        }, 3000);
    };

    const handleReset = () => {
        setSelectedMethod("");
        setTransactionId("");
        setStatus("select");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow-lg p-4 w-100" style={{maxWidth: "500px", borderRadius: "20px"}}>
                {status === "select" && (
                    <PaymentSelect
                        selectedMethod={selectedMethod}
                        setSelectedMethod={setSelectedMethod}
                        onProceed={handleProceed}
                        amount={amount}
                        setAmount={setAmount}
                        totalCostCoin={totalCostCoin}
                        setTotalCost={setTotalCost}
                        totalCostUSD={totalCostUSD}
                        setTotalUSD={setTotalUSD}
                    />
                )}
                {status === "pending" && <PaymentPending/>}
                {status === "success" && (
                    <PaymentSuccess
                        selectedMethod={selectedMethod}
                        transactionId={transactionId}
                        onReset={handleReset}
                        amountCoin={totalCostCoin}
                        amountToken={amount}
                        amountUSD={totalCostUSD}
                    />
                )}
            </Card>
        </div>
    );
};

export default PaymentPage;
