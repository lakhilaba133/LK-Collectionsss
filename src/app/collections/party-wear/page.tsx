// src/app/collections/party-wear/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";

// Product type
interface Product {
  id: number;
  excerpt: string;
  details: string;
  src: string;
  category: string;
}

// Sample products for Party Wear
const products: Product[] = [
  {
    id: 1,
    excerpt: "Elegant pink party dress with lace details.",
    details: "Made from high-quality chiffon fabric, perfect for evening parties and celebrations.",
    src: "/images/image1.png",
    category: "Party Wear",
  },
  {
    id: 2,
    excerpt: "Stylish  sequined dress for special occasions.",
    details: "Premium fabric with sequins, perfect for weddings and formal gatherings.",
    src: "/images/image2.png",
    category: "Party Wear",
  },
  {
    id: 3,
    excerpt: "Golden shimmer gown with fitted silhouette.",
    details: "High-quality satin material, elegant and classy for party nights.",
    src: "/images/image3.png",
    category: "Party Wear",
  },
  {
    id: 4,
    excerpt: "Black frill maxi dress for casual parties.",
    details: "Soft fabric with flowing frills, comfortable yet stylish.",
    src: "/images/image4.png",
    category: "Party Wear",
  },
  {
    id: 5,
    excerpt: "Velvet dress with full sleeves.",
    details: "Luxurious velvet fabric, perfect for winter parties.",
    src: "/images/Image5.png",
    category: "Party Wear",
  },
  {
  id: 6,
  excerpt: "Elegant pink party suit with floral embroidery.",
  details: "Made from soft chiffon fabric, ideal for festive and evening events.",
  src: "/images/image6.png",
  category: "Party Wear",
},
{
  id: 7,
  excerpt: "Charming Red party suit with sequin detailing.",
  details: "Premium chiffon fabric ensures comfort and elegance for celebrations.",
  src: "/images/image7.png",
  category: "Party Wear",
},
{
  id: 8,
  excerpt: "Stylish pink suit with lace and bead work.",
  details: "Perfect choice for parties, crafted from high-quality chiffon.",
  src: "/images/image8.png",
  category: "Party Wear",
},
{
  id: 9,
  excerpt: "Elegant Golden chiffon suit with intricate thread embroidery.",
  details: "Designed for evening parties and festive gatherings.",
  src: "/images/image9.png",
  category: "Party Wear",
},
{
  id: 10,
  excerpt: "Pink party suit with delicate floral lace accents.",
  details: "Soft, premium chiffon fabric makes it perfect for special occasions.",
  src: "/images/image10.png",
  category: "Party Wear",
},
{
  id: 11,
  excerpt: "Trendy Green suit with Full Sleeves.",
  details: "Lightweight chiffon fabric for comfort and graceful appearance.",
  src: "/images/image11.png",
  category: "Party Wear",
},
{
  id: 12,
  excerpt: "Pink evening party suit with embroidered motifs.",
  details: "Perfect for festive events and celebrations with a modern touch.",
  src: "/images/image12.png",
  category: "Party Wear",
},
{
  id: 13,
  excerpt: "Modern  party suit with sequin embellishments.",
  details: "Designed for parties and special events, combining elegance and style.",
  src: "/images/image13.png",
  category: "Party Wear",
},
{
  id: 14,
  excerpt: "Pink party suit with elegant lace neckline.",
  details: "Soft chiffon fabric with delicate lace work, ideal for evening parties.",
  src: "/images/image14.png",
  category: "Party Wear",
},
{
  id: 15,
  excerpt: "Stylish  party suit with subtle shimmer.",
  details: "Lightweight and comfortable, perfect for festive occasions.",
  src: "/images/image15.png",
  category: "Party Wear",
},
{
  id: 16,
  excerpt: "Black Maxi party suit with embroidered floral patterns.",
  details: "High-quality chiffon fabric designed for celebrations and special events.",
  src: "/images/image16.png",
  category: "Party Wear",
},
{
  id: 18,
  excerpt: "Elegent Maxi.",
  details: "Perfect for Parties.",
  src: "/images/image18.png",
  category: "Party Wear", 
},

{
  id: 19,
  excerpt: "Stylish Maxi With beautiful sleeves.",
  details: "Lightweight chiffon fabric, perfect for festive and evening occasions.",
  src: "/images/image19.png",
  category: "Party Wear",
},

{
  id: 20,
  excerpt: "Chic party suit with embroidered accents.",
  details: "Made from premium chiffon fabric, ideal for celebrations and special events.",  
  src: "/images/image20.png",
  category: "Party Wear",
}
];

export default function PartyWearPage() {
  const router = useRouter();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  // Filter Party Wear products
  const filteredProducts = products.filter((p) => p.category === "Party Wear");

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
        <h1 className="text-4xl font-extrabold text-pink-700">Party Wear</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayedItems.map((item) => {
          const isFav = favorites.some((f) => f.id === item.id);
          return (
            <div
              key={item.id}
              className="relative flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full lg:w-1/2">
                <Image
                  src={item.src}
                  alt={item.excerpt}
                  width={700}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-pink-100 transition"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFav ? "fill-pink-600 text-pink-600" : "text-gray-400"
                    }`}
                  />
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

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-600 text-white hover:bg-pink-700"
          }`}
        >
          Previous
        </button>
        <span className="text-2xl font-bold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 text-xl font-bold rounded-xl transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-600 text-white hover:bg-pink-700"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
}
