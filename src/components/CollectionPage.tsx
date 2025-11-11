// src/components/CollectionPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

interface Product {
  id: number;
  excerpt: string;
  details: string;
  src: string;
  category: string;
}

interface Props {
  collectionName: string;
  products: Product[];
}

export default function CollectionPage({ collectionName, products }: Props) {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const filteredProducts = products.filter(
    (p) => p.category === collectionName
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const toggleFavorite = (product: Product) => {
    const isFav = favorites.some((item) => item.id === product.id);
    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        image: product.src,
        category: product.excerpt,
      });
    }
  };

  const toggleDetails = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <section className="min-h-screen bg-pink-50 py-10 px-6 md:px-16">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-pink-700">{collectionName}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedItems.map((item) => {
          const isFav = favorites.some((f) => f.id === item.id);
          return (
            <div key={item.id} className="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full lg:w-1/2">
                <Image src={item.src} alt={item.excerpt} width={700} height={500} className="w-full h-full object-cover" />
                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-pink-100 transition"
                >
                  <Heart className={`w-6 h-6 ${isFav ? "fill-pink-600 text-pink-600" : "text-gray-400"}`} />
                </button>
              </div>

              <div className="w-full lg:w-1/2 p-8 text-gray-800 space-y-5">
                <p className="text-lg italic text-gray-600">{item.excerpt}</p>
                {expandedItems.includes(item.id) && (
                  <p className="text-base text-gray-700 leading-relaxed">{item.details}</p>
                )}

                <button
                  onClick={() => toggleDetails(item.id)}
                  className="text-lg text-pink-600 font-semibold underline hover:text-pink-800 transition block"
                >
                  {expandedItems.includes(item.id) ? "Show Less" : "Read More"}
                </button>

                <div className="flex justify-start mt-4">
                  <button
                    onClick={() => router.push(`/customize/${item.id}`)}
                    className="px-5 py-2 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition w-max"
                  >
                    Customize
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-pink-600 text-white hover:bg-pink-700"}`}
        >
          Previous
        </button>
        <span className="text-2xl font-bold text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-pink-600 text-white hover:bg-pink-700"}`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
