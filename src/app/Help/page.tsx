// app/help/page.tsx
"use client";
import React from "react";
import Link from "next/link";

const HelpPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-semibold mb-4">Help</h1>

        <p className="mb-6 leading-relaxed">
          Agar aapko koi mushkil aa rahi hai to yahan se start karo. Neeche common madad aur resources diye
          gaye hain.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Account aur Login</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Account create karne ke liye Sign up par click karo.</li>
            <li>Login nahi ho raha? “Forgot password” use karo aur email check karo.</li>
            <li>Agar email nahi aayi to spam folder check karo.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Order aur Payments</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Order track karne ke liye Orders page kholo.</li>
            <li>Payment failed ho to transaction receipt sambhal ke support ko bhejo.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Contact Support</h2>
          <p className="mb-2">Hamari team se contact karne ke liye:</p>
          <div className="space-y-1">
            <p>Email: <a href="mailto:support@example.com" className="text-blue-600">support@example.com</a></p>
            <p>Phone / WhatsApp: <a href="tel:+923242129476" className="text-blue-600">+92 324 2129476</a></p>
            <p>Working hours: Mon–Sat, 10:00 — 18:00</p>
          </div>
        </section>

        <div className="mt-6 flex gap-3">
          <Link href="/privacy-policy" className="px-4 py-2 rounded-lg border hover:bg-gray-100">
            Privacy & FAQ
          </Link>
          <a href="mailto:support@example.com" className="px-4 py-2 rounded-lg bg-blue-600 text-white">
            Email Support
          </a>
        </div>
      </div>
    </main>
  );
};

export default HelpPage;
