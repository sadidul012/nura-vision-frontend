import React, {useState} from "react";

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const faqs = [
        {
            question: "Can I try it for free?",
            answer: "Yes! Our Basic plan includes a free trial.",
        },
        {
            question: "Do you offer discounts for startups?",
            answer: "Yes, contact our sales team for startup-friendly pricing.",
        },
    ];

    return (
        <div className="mt-5">
            <h3 className="text-center mb-3">FAQ</h3>
            <div className="accordion">
                {faqs.map((faq, idx) => (
                    <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${
                                    openIndex === idx ? "" : "collapsed"
                                }`}
                                type="button"
                                onClick={() => toggle(idx)}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            className={`accordion-collapse collapse ${
                                openIndex === idx ? "show" : ""
                            }`}
                        >
                            <div className="accordion-body">{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
