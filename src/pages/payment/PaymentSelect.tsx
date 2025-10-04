import React, {useState, useEffect} from "react";
import {Button, Form, Alert} from "react-bootstrap";
import {FaCheckCircle} from "react-icons/fa";

interface PaymentSelectProps {
    selectedMethod: string;
    amount: number;
    totalCostCoin: number;
    totalCostUSD: number;
    setSelectedMethod: (method: string) => void;
    onProceed: (amountInTokens: number) => void;
    setAmount: (amountInTokens: number) => void;
    setTotalCost: (amountInTokens: number) => void;
    setTotalUSD: (amountInTokens: number) => void;
}

const PaymentSelect: React.FC<PaymentSelectProps> = ({selectedMethod, setSelectedMethod, onProceed, amount, totalCostCoin, totalCostUSD, setTotalUSD, setTotalCost, setAmount}) => {
    const [serviceName] = useState<string>("Liveliness Check API");
    const [charges] = useState<number>(5);
    const [total, setTotal] = useState<number>(amount + charges); // Total amount in USD
    const [coinPrice, setCoinPrice] = useState<number>(0);
    const tokenPrice = 1/100;

    // Fetch token price based on selected method
    useEffect(() => {
        const fetchTokenPrice = async () => {
            let price: number = 0;
            if (selectedMethod === "Solana") {
                price = 228.47; // SOL price in USD
            } else if (selectedMethod === "Algorand") {
                price = 0.222119; // ALGO price in USD
            }
            setCoinPrice(price);
        };

        fetchTokenPrice();
    }, [amount, charges, selectedMethod, setTotal]);

    // Calculate token equivalent when total amount or token price changes
    useEffect(() => {
        if (coinPrice > 0) {
            const totalCostUSD = coinPrice / (coinPrice/tokenPrice) * total;
            // const tokens = parseFloat(((total * tokenPrice) * coinPrice).toFixed(2));
            const totalCostCoin = totalCostUSD / coinPrice;
            setTotalCost(totalCostCoin);
            setTotalUSD(totalCostUSD);
        }
    }, [total, coinPrice, tokenPrice, setTotalCost, setTotalUSD]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = parseFloat(e.target.value);
        setAmount(newAmount);
        setTotal(newAmount + charges);
    };

    return (
        <div>
            <h2 className="text-center mb-4">
                Payment
            </h2>
            <p className="text-muted text-center">
                Pay for <strong>{serviceName}</strong> securely using your preferred blockchain.
            </p>

            <Form className="mb-4">
                <Form.Group className="mb-3">
                    <Form.Label>Buy Token Amount</Form.Label>
                    <Form.Control
                        type="number"
                        min={0.01}
                        step={0.01}
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </Form.Group>
                <p className="mb-1">
                    Service Charges: <strong>{charges} Token</strong>
                </p>
                <p className="mb-0">
                    Total: <strong>{total.toFixed(2)} Token</strong>
                </p>
                {selectedMethod && coinPrice > 0 && (
                    <Alert variant="info" className="mt-3">
                        <p>
                            <strong>{selectedMethod}</strong> price:{" "}
                            <strong>{coinPrice.toFixed(2)} USD</strong>
                        </p>
                        <p>
                            Estimated Cost:{" "}
                            <strong>{totalCostCoin.toFixed(4)} {selectedMethod === "Solana" ? "SOL" : "ALGO"} ({totalCostUSD.toFixed(2)} USD)</strong>
                        </p>
                    </Alert>
                )}
            </Form>

            <div className="d-grid gap-3 mb-4">
                <Button
                    variant={selectedMethod === "Solana" ? "success" : "outline-dark"}
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => setSelectedMethod("Solana")}
                >
                    <span>Pay with Solana</span>
                    {
                        // @ts-ignore
                        selectedMethod === "Solana" && <FaCheckCircle/>
                    }
                </Button>

                <Button
                    variant={selectedMethod === "Algorand" ? "success" : "outline-dark"}
                    className="d-flex align-items-center justify-content-between"
                    onClick={() => setSelectedMethod("Algorand")}
                >
                    <span>Pay with Algorand</span>
                    {
                        // @ts-ignore
                        selectedMethod === "Algorand" && <FaCheckCircle/>
                    }
                </Button>
            </div>

            <div className="text-center">
                <Button
                    variant="primary"
                    size="lg"
                    className="w-100"
                    style={{borderRadius: "15px"}}
                    onClick={() => onProceed(totalCostCoin)}
                >
                    Proceed to Pay
                </Button>
            </div>
        </div>
    );
};

export default PaymentSelect;
