import React, {createContext, useContext, useState, ReactNode} from "react";
import {Toast, ToastContainer} from "react-bootstrap";

type ToastVariant = "success" | "danger" | "warning" | "info" | "dark";

interface ToastContextProps {
    showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState<ToastVariant>("dark");

    const showToast = (msg: string, v: ToastVariant = "dark") => {
        setMessage(msg);
        setVariant(v);
        setShow(true);
    };

    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            <ToastContainer position="top-end" className="p-3 mt-5">
                <Toast
                    bg={variant}
                    onClose={() => setShow(false)}
                    show={show}
                    delay={2500}
                    autohide
                >
                    <Toast.Body className="text-white">{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </ToastContext.Provider>
    );
};

// Hook for easy access
export const useToast = (): ToastContextProps => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
