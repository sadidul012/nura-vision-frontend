// SocialWalletRegister.tsx
import React from "react";
import {Card, Button} from "react-bootstrap";
import {FaGoogle, FaGithub} from "react-icons/fa";
import {SiSolana, SiAlgorand} from "react-icons/si";

const SocialWalletRegister: React.FC = () => {
    // ---- Social Auth Handlers ----
    const handleGoogleRegister = () => {
        alert("Register with Google clicked (demo)");
    };

    const handleGithubRegister = () => {
        alert("Register with GitHub clicked (demo)");
    };

    // ---- Wallet Auth Handlers ----
    const handleSolanaRegister = async () => {
        alert("Register with Solana wallet clicked (demo)");
    };

    const handleAlgorandRegister = async () => {
        alert("Register with Algorand wallet clicked (demo)");
    };


    // @ts-ignore
    const algo = <SiAlgorand className="me-2"/>
    // @ts-ignore
    const solana = <SiSolana className="me-2"/>
    // @ts-ignore
    const github = <FaGithub className="me-2"/>
    // @ts-ignore
    const google = <FaGoogle className="me-2"/>


    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #007bff, #6610f2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Card
                style={{
                    width: "400px",
                    padding: "30px",
                    borderRadius: "15px",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    backgroundColor: "#fff",
                }}
            >
                <h2 className="text-center mb-2" style={{fontWeight: "700", color: "#ff4b2b"}}>
                    Create Account
                </h2>
                <p className="text-center mb-4" style={{color: "#777"}}>
                    Sign up with Google, GitHub, or your wallet
                </p>

                {/* Google */}
                <Button
                    onClick={handleGoogleRegister}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{borderRadius: "10px", backgroundColor: "#DB4437", border: "none"}}
                >
                    {google} Sign up with Google
                </Button>

                {/* GitHub */}
                <Button
                    onClick={handleGithubRegister}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{borderRadius: "10px", backgroundColor: "#333", border: "none"}}
                >
                    {github} Sign up with GitHub
                </Button>

                <div className="text-center my-3" style={{color: "#888"}}>
                    OR
                </div>

                {/* Solana */}
                <Button
                    onClick={handleSolanaRegister}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#9945FF",
                        border: "none",
                        fontWeight: "500",
                    }}
                >
                    {solana} Sign up with Solana Wallet
                </Button>

                {/* Algorand */}
                <Button
                    onClick={handleAlgorandRegister}
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#00AA99",
                        border: "none",
                        fontWeight: "500",
                    }}
                >
                    {algo} Sign up with Algorand Wallet
                </Button>

                <div className="text-center mt-3">
                    <small className="text-muted">
                        Already have an account?{" "}
                        <a href="/login" className="text-decoration-none fw-semibold">
                            Login
                        </a>
                    </small>
                </div>
            </Card>
        </div>
    );
};

export default SocialWalletRegister;
