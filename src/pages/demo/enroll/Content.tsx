import {FaCheckCircle, FaSpinner, FaTimesCircle, FaUserPlus} from "react-icons/fa";
import React, {useState} from "react";

export default function Content() {

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "failed">("idle");

    // @ts-ignore
    const EnrollIcon = <FaUserPlus/>;
    // @ts-ignore
    const EnrollIconHeader = <FaUserPlus size={60} className="text-primary mb-3"/>;
    // @ts-ignore
    const circle = <FaCheckCircle className="text-success me-2"/>
    // @ts-ignore
    const timesCircle = <FaTimesCircle/>
    // @ts-ignore
    const spinner = <FaSpinner className="spin"/>


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
                <div className="text-center mb-4">
                    {EnrollIconHeader}
                    <h2 className="fw-bold">Enrollment for Liveliness Check</h2>
                    <p className="text-muted">
                        Please fill in your details and upload your photo to complete enrollment.
                    </p>
                </div>

                {/* Instructions */}
                <div className="mb-4">
                    <h5 className="fw-semibold">Steps to Verify:</h5>
                    <ul className="list-unstyled mt-3">
                        <li className="d-flex align-items-center mb-2">
                            {circle}
                            Provide information to recognize you
                        </li>
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
                        {circle} Enrollment Successful 🎉. <a href="/demo/verify" className="text-decoration-none fw-semibold">
                            Go to Verify
                        </a>
                    </div>
                )}
                {status === "failed" && (
                    <div
                        className="alert alert-danger text-center d-flex align-items-center justify-content-center gap-2">
                        {timesCircle} Enrollment Failed. Please try again.
                    </div>
                )}
                {status === "loading" && (
                    <div
                        className="alert alert-info text-center d-flex align-items-center justify-content-center gap-2">
                        {spinner} Enrolling...
                    </div>
                )}

                {/* Verification Form */}
                <form onSubmit={handleVerify}>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter your email"/>
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Upload Photo</label>
                        <input type="file" className="form-control" accept="image/*"/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold"
                            disabled={status === "loading"}>
                        {EnrollIcon} {status === "loading" ? "Enrolling..." : "Enroll Now"}
                    </button>
                </form>

                {/* Footer Note */}
                <div className="text-center mt-4 small text-muted">
                    Your data is securely encrypted and never shared with third parties.
                </div>
                <div className="text-center mt-3">
                    <small className="text-muted">
                        Already enrolled?{" "}
                        <a href="/demo/verify" className="text-decoration-none fw-semibold">
                            Go to Verify
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
}
