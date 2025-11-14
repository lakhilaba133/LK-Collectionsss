// app/privacy-policy/page.tsx
"use client";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-[#F9F1E7] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          At La Khilaba Collection, we respect your privacy and are committed
          to protecting your personal information. This policy explains how we
          collect, use, and safeguard your data.
        </p>

        <section className="space-y-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect basic information like your name, email, contact
              number, and address to ensure smooth order processing and
              personalized service. Secure payment gateways handle all payment
              details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Data
            </h2>
            <p className="text-gray-700">
              Your data is used only for order fulfillment, customer support,
              and improving your shopping experience. We do not sell or misuse
              any information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Protection
            </h2>
            <p className="text-gray-700">
              Your personal data is stored securely using advanced encryption
              and is protected from unauthorized access at all times.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Your Rights
            </h2>
            <p className="text-gray-700">
              You may request to review, update, or delete your data anytime.
              For assistance, contact our privacy team.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have questions regarding our privacy policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@lakahalaba.com"
                className="text-[#B88E2F] font-medium"
              >
               lakhilaba133@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
