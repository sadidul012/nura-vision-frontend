import React from "react";
import {Card, Button} from "react-bootstrap";
import {FaGoogle, FaGithub} from "react-icons/fa";
import {SiSolana, SiAlgorand} from "react-icons/si";
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

const LoginForm: React.FC = () => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role: "user" | "admin") => {
        login(role);
        navigate("/dashboard");
    };

    // ---- Social Auth Handlers ----
    const handleGoogleLogin = () => {
        handleLogin("user")
    };

    const handleGithubLogin = () => {
        handleLogin("admin")
    };

    // ---- Wallet Auth Handlers ----
    const handleSolanaLogin = async () => {
        // Example: window.solana.connect() for Phantom
        alert("Login with Solana wallet clicked (demo)");
    };

    const handleAlgorandLogin = async () => {
        // Example: use Pera Wallet / MyAlgo connector
        alert("Login with Algorand wallet clicked (demo)");
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
                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
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
                <h2 className="text-center mb-4" style={{fontWeight: "700", color: "#2575fc"}}>
                    Sign In
                </h2>

                {/* Google */}
                <Button
                    onClick={handleGoogleLogin}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{borderRadius: "10px", backgroundColor: "#DB4437", border: "none"}}
                >
                    {google} Continue with Google
                </Button>

                {/* GitHub */}
                <Button
                    onClick={handleGithubLogin}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{borderRadius: "10px", backgroundColor: "#333", border: "none"}}
                >
                    {github} Continue with GitHub
                </Button>

                <div className="text-center my-3" style={{color: "#888"}}>
                    OR
                </div>

                {/* Solana */}
                <Button
                    onClick={handleSolanaLogin}
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#9945FF",
                        border: "none",
                        fontWeight: "500",
                    }}
                >
                    {solana} Connect Solana Wallet
                </Button>

                {/* Algorand */}
                <Button
                    onClick={handleAlgorandLogin}
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#00AA99",
                        border: "none",
                        fontWeight: "500",
                    }}
                >
                    {algo} Connect Algorand Wallet
                </Button>
                <div className="text-center mt-3">
                    <small className="text-muted">
                        Not already a member?{" "}
                        <a href="/register" className="text-decoration-none fw-semibold">
                            Register
                        </a>
                    </small>
                </div>
            </Card>
        </div>
    );
};

export default LoginForm;
