import React from "react";
import {FaCheckCircle, FaIdCard, FaLock} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Content: React.FC = () => {
    // @ts-ignore
    const faIdCard = <FaIdCard size={60} className="text-primary mb-3"/>
    // @ts-ignore
    const circle = <FaCheckCircle className="text-success me-2"/>
    // @ts-ignore
    const lock = <FaLock className="me-2"/>
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card shadow-lg p-4 border-0 rounded-4" style={{maxWidth: "600px", width: "100%"}}>

                {/* Header */}
                <div className="text-center mb-4">
                    {faIdCard}
                    <h2 className="fw-bold">Identity Verification</h2>
                    <p className="text-muted">
                        Please complete the verification process to continue.
                        This ensures your identity is secure.
                    </p>
                </div>

                {/* Instructions */}
                <div className="mb-4">
                    <h5 className="fw-semibold">Steps to Verify:</h5>
                    <ul className="list-unstyled mt-3">
                        <li className="d-flex align-items-center mb-2">
                            {circle}
                            Capture/Upload a live selfie for liveliness check.
                        </li>
                        <li className="d-flex align-items-center">
                            {circle}
                            Wait for confirmation (usually takes less than a minute).
                        </li>
                    </ul>
                </div>

                {/* Verification Form */}
                <form>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Take a Selfie</label>
                        <input type="file" accept="image/*" capture="user" className="form-control"/>
                    </div>

                    <button className="btn btn-primary w-100 py-2 fw-bold rounded-3">
                        {lock} Verify Now
                    </button>
                </form>

                {/* Footer Note */}
                <div className="text-center mt-4 small text-muted">
                    Your data is securely encrypted and never shared with third parties.
                </div>

                <div className="text-center mt-3">
                    <small className="text-muted">
                        Not already enrolled?{" "}
                        <a href="/demo/enroll" className="text-decoration-none fw-semibold">
                            Go to Enrollment
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Content;
