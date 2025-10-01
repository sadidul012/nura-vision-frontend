import React from "react";

const ExtraInfo: React.FC = () => {
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

            <div className="mt-5">
                <h3 className="text-center mb-3">FAQ</h3>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1"
                            >
                                Can I try it for free?
                            </button>
                        </h2>
                        <div
                            id="collapse1"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes! Our Basic plan includes a free trial.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse2"
                            >
                                Do you offer discounts for startups?
                            </button>
                        </h2>
                        <div
                            id="collapse2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                Yes, contact our sales team for startup-friendly pricing.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraInfo;
