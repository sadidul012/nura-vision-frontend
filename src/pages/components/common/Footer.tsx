import React from 'react';
import {Container} from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light text-center py-4 mt-auto">
            <Container>
                <p>&copy; {new Date().getFullYear()} LivelinessCheck. All rights reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
