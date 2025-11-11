"use client";

import React from "react";
import { useRouter } from "next/navigation";

const collections = [
  { name: "Daily Wear", slug: "daily-wear", color: "from-pink-400 to-pink-600", img: "/images/dailywear8.png" },
  { name: "Party Wear", slug: "party-wear", color: "from-purple-400 to-purple-600", img: "/images/image1.png" },
  { name: "Bridal Wear", slug: "bridal-wear", color: "from-red-400 to-red-600", img: "/images/image17.png" },
  { name: "Stitch Collection", slug: "stitch-collection", color: "from-yellow-400 to-yellow-500", img: "/images/dailywear1.png" },
];

export default function CollectionsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-10 bg-pink-50 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <h1 className="text-5xl font-extrabold text-pink-700 mb-12 text-center drop-shadow-lg">
        La Khalaba Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {collections.map((col) => (
          <div
            key={col.slug}
            onClick={() => router.push(`/collections/${col.slug}`)}
            className={`
              relative cursor-pointer rounded-3xl p-6 shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl
              bg-gradient-to-br ${col.color} text-white overflow-hidden
            `}
          >
            {/* Decorative image */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-30">
              <img src={col.img} alt={col.name} className="w-full h-full object-cover rounded-full animate-bounce-slow" />
            </div>

            {/* Text Content */}
            <h2 className="text-2xl font-semibold mb-2">{col.name}</h2>
            <p className="text-sm opacity-90">
              Explore our exclusive {col.name.toLowerCase()} collection
            </p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl opacity-0 hover:opacity-20 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
