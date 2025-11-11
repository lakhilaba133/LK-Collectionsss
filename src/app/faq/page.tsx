"use client";
import React from "react";

const faqs = [
  {
    question: "Can I customize my clothes?",
    answer:
      "Yes! You can select design, size, color, and fabric for most items. Use the 'Customize' option on the product page.",
  },
  {
    question: "How long does a custom order take?",
    answer:
      "Custom orders usually take 7–14 business days depending on the complexity of the design and availability of materials.",
  },
  {
    question: "Can I change sizes or colors after ordering?",
    answer:
      "Once the custom order is placed, changes cannot be made. Please double-check your selections before confirming the order.",
  },
  {
    question: "What if I receive the wrong customization?",
    answer:
      "If the product does not match your customization, contact our support team within 5 days. We will arrange a replacement or refund.",
  },
  {
    question: "Which payment methods are available?",
    answer:
      "We accept debit/credit cards, bank transfers, and Cash on Delivery depending on your location.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can email us at support@lakahalaba.com or WhatsApp us at +92 324 2129476 for assistance.",
  },
];

const FAQPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF5F3] via-[#F7EDE2] to-[#E8E8E8] py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-[#D6C7B4]">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#2B2A29] tracking-tight">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          Here are answers to some common questions about our{" "}
          <span className="font-semibold text-[#B57D6A]">Women’s</span> and{" "}
          <span className="font-semibold text-[#2C3E50]">Men’s</span> clothing
          customization options, orders, and delivery.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="p-5 border border-[#E4D5C7] rounded-2xl bg-white hover:bg-[#FFF1EC] transition-all shadow-sm"
            >
              <summary className="font-semibold text-[#2C3E50] cursor-pointer text-lg">
                {faq.question}
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
