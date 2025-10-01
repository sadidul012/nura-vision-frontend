import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just log the data
        console.log("Form submitted:", formData);
        alert("Thank you! We will get back to you soon.");
        setFormData({name: "", email: "", message: ""});
    };

    return (
        <Form onSubmit={handleSubmit} noValidate className="mx-auto bg-light p-4 rounded shadow needs-validation"
              style={{maxWidth: "600px"}}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" id="name" name="name" value={formData.name}
                              onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" id="email" name="email" value={formData.email}
                              onChange={handleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" id="message" name="message"
                              value={formData.message} onChange={handleChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Send</Button>
        </Form>
    );
};

export default ContactForm;
