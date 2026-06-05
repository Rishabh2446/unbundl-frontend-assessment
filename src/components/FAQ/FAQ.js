import React, { useState } from "react";
import { faqData } from "../../data/faqData";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <section className="faq-section">
      <h2 className="faq-title">
          <span className="purple-text">Got Questions?</span>{" "}
         <span className="black-text">We've got answers</span>
      </h2>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={faq.id}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
