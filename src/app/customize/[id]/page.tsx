"use client";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";

export default function CustomizePage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id;

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [error, setError] = useState("");

  const handleDone = () => {
    // 🔹 Check if both color and size are selected
    if (!color || !size) {
      setError("⚠️ Please select both color and size before continuing!");
      return;
    }

    // ✅ Clear error and redirect to Contact page
    setError("");
    router.push("/contact");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9FB] px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-[#E21E80] tracking-wide">
        Customize Your Suit
      </h1>

      {/* Color Selection */}
      <div className="mb-6 text-center">
        <label className="block text-gray-800 font-semibold text-lg mb-3">
          Select Color:
        </label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border-2 border-[#E21E80] rounded-xl px-5 py-3 w-72 sm:w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E21E80] transition-all"
        >
          <option value="">Choose color</option>
          <option value="black">Black</option>
          <option value="beige">Beige</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>
      </div>

      {/* Size Selection */}
      <div className="mb-10 text-center">
        <label className="block text-gray-800 font-semibold text-lg mb-3">
          Select Size:
        </label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border-2 border-[#E21E80] rounded-xl px-5 py-3 w-72 sm:w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E21E80] transition-all"
        >
          <option value="">Choose size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
      </div>

      {/* ⚠️ Error Message */}
      {error && (
        <p className="text-red-600 font-semibold mb-6 animate-pulse">
          {error}
        </p>
      )}

      {/* ✅ Done Button */}
      <button
        onClick={handleDone}
        className="bg-[#E21E80] hover:bg-[#C8186E] text-white text-lg font-bold py-3 px-10 rounded-2xl shadow-md transition-all hover:scale-105"
      >
        Done
      </button>
    </div>
  );
}
