import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <Container>
        <p>&copy; {new Date().getFullYear()} LivelinessCheck. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
