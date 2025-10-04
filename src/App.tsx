import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import {ToastProvider} from "./pages/components/ToastProvider";
import {AuthProvider} from "./context/AuthContext";
import {allRoutes} from "./routes";


function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="app-wrapper">
                    <ToastProvider>
                        <Routes>
                            {allRoutes.map((route, index) => (
                                <Route key={index} path={route.path} element={route.element}/>
                            ))}
                        </Routes>
                    </ToastProvider>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
