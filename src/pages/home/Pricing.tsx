import React from 'react';
import { Container } from 'react-bootstrap';
import PricingCard from "../pricing/PricingCard";

const Pricing: React.FC = () => {


  return (
    <section id="pricing" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Simple Pricing</h2>
        <PricingCard />
      </Container>
    </section>
  );
};

export default Pricing;
