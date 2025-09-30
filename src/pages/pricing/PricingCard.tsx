import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, buttonText, buttonLink }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-price my-3">${price}</h6>
          <ul className="list-unstyled mb-4">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <a href={buttonLink || "#"} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
