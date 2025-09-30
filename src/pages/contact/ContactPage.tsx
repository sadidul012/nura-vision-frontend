import React from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import MainMenu from "../components/common/MainMenu";
import Footer from "../components/common/Footer";

const ContactPage: React.FC = () => {
    return (
        <>
            <div className="app-content">
                <MainMenu/>
                <div className="container py-5">
                    <ContactHeader/>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ContactForm/>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <h5>Other Contact Methods:</h5>
                            <p>Email: support@livelinessapi.com | Phone: +1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactPage;
