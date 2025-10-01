import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="mt-5">
            <h3 className="text-center mb-4">Why Choose Us?</h3>
            <div className="row text-center">
                <div className="col-md-4">
                    <h5>🔒 Secure</h5>
                    <p>All data is encrypted and GDPR compliant.</p>
                </div>
                <div className="col-md-4">
                    <h5>⚡ Fast</h5>
                    <p>Low-latency API optimized for real-time liveliness detection.</p>
                </div>
                <div className="col-md-4">
                    <h5>🤝 Support</h5>
                    <p>24/7 support for enterprise customers.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
