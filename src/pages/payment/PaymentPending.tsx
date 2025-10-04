import React from "react";
import {Spinner} from "react-bootstrap";

const PaymentPending: React.FC = () => {
    return (
        <div className="text-center p-5">
            <Spinner animation="border" variant="primary"/>
            <h4 className="mt-3">Processing Payment...</h4>
            <p className="text-muted">Please wait while your transaction is being confirmed.</p>
        </div>
    );
};

export default PaymentPending;
