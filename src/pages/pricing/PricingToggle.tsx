import React from "react";

interface PricingToggleProps {
  yearly: boolean;
  setYearly: (val: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ yearly, setYearly }) => {
  return (
    <div className="text-center mb-4">
      <div className="form-check form-switch d-inline-flex align-items-center gap-2">
        <label className="form-check-label m-5">Monthly</label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={yearly}
          onChange={(e) => setYearly(e.target.checked)}
        />
        <label className="form-check-label">Yearly <span className="text-success">(Save 20%)</span></label>
      </div>
    </div>
  );
};

export default PricingToggle;
