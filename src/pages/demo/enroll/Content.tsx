import {FaCheckCircle, FaUserPlus} from "react-icons/fa";
import React from "react";

export default function Content() {
    // @ts-ignore
    const EnrollIcon = <FaUserPlus/>;
    // @ts-ignore
    const EnrollIconHeader = <FaUserPlus  size={60} className="text-primary mb-3"/>;
    // @ts-ignore
    const circle = <FaCheckCircle className="text-success me-2"/>
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

                {/* Verification Form */}
                <form>
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

                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                        {EnrollIcon} Enroll Now
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
        // <div className="d-flex align-items-center justify-content-center mt-5 bg-gradient">
        //     <div className="card shadow-lg border-0 rounded-4" style={{maxWidth: "500px", width: "100%"}}>
        //         <div className="card-header text-center bg-primary text-white py-4 rounded-top-4">
        //             <h3 className="mb-0 d-flex justify-content-center align-items-center gap-2">
        //                 {EnrollIcon} Enroll for Liveliness Check
        //             </h3>
        //         </div>
        //
        //         <div className="card-body p-4">
        //             <p className="text-muted text-center mb-4">
        //                 Please fill in your details and upload your photo to complete enrollment.
        //             </p>
        //
        //             <form>
        //                 <div className="mb-3">
        //                     <label className="form-label">Full Name</label>
        //                     <input type="text" className="form-control" placeholder="Enter your full name"/>
        //                 </div>
        //
        //                 <div className="mb-3">
        //                     <label className="form-label">Email Address</label>
        //                     <input type="email" className="form-control" placeholder="Enter your email"/>
        //                 </div>
        //
        //                 <div className="mb-4">
        //                     <label className="form-label">Upload Photo</label>
        //                     <input type="file" className="form-control" accept="image/*"/>
        //                 </div>
        //
        //                 <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
        //                     Enroll Now
        //                 </button>
        //             </form>
        //
        //             <div className="text-center mt-3">
        //                 <small className="text-muted">
        //                     Already enrolled?{" "}
        //                     <a href="/demo/verify" className="text-decoration-none fw-semibold">
        //                         Go to Verify
        //                     </a>
        //                 </small>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
