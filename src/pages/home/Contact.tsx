import React from 'react';
import {Container} from 'react-bootstrap';
import ContactForm from "../contact/ContactForm";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-5 bg-dark text-light">
            <Container>
                <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
                <ContactForm/>
            </Container>
        </section>
    );
};

export default Contact;
