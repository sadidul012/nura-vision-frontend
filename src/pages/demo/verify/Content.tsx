import React, {useState} from "react";
import {FaCheckCircle, FaIdCard, FaLock, FaTimesCircle, FaSpinner} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Content: React.FC = () => {
    // @ts-ignore
    const faIdCard = <FaIdCard size={60} className="text-primary mb-3"/>
    // @ts-ignore
    const circle = <FaCheckCircle className="text-success me-2"/>
    // @ts-ignore
    const timesCircle = <FaTimesCircle/>
    // @ts-ignore
    const spinner = <FaSpinner className="spin"/>
    // @ts-ignore
    const lock = <FaLock className="me-2"/>

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "failed">("idle");

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // simulate API call (replace with your actual verification API)
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // randomly success/fail
            setStatus(isSuccess ? "success" : "failed");
        }, 2000);
    };

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

                {status === "success" && (
                    <div
                        className="alert alert-success text-center d-flex align-items-center justify-content-center gap-2">
                        {circle} Verification Successful 🎉
                    </div>
                )}
                {status === "failed" && (
                    <div
                        className="alert alert-danger text-center d-flex align-items-center justify-content-center gap-2">
                        {timesCircle} Verification Failed. Please try again.
                    </div>
                )}
                {status === "loading" && (
                    <div
                        className="alert alert-info text-center d-flex align-items-center justify-content-center gap-2">
                        {spinner} Verifying...
                    </div>
                )}

                <form onSubmit={handleVerify}>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Take a Selfie</label>
                        <input type="file" accept="image/*" capture="user" className="form-control"/>
                    </div>

                    <button className="btn btn-primary w-100 py-2 fw-bold rounded-3" disabled={status === "loading"}
                            type="submit">
                        {lock} {status === "loading" ? "Verifying..." : "Verify Now"}
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
