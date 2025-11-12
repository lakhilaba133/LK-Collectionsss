// SimpleClothingGallery.jsx
// A minimal React component showing clothing images only, no price or cart.

import React from "react";

const collections = [
  { id:1,
     img: "/images/dailywear8.png" },
  { id: 2,
       img: "/images/image16.png" },
  {  id : 3,
       img: "/images/image18.png" },
  { id:4 , 
     img: "/images/dailywear1.png" },
];
export default function SimpleClothingGallery() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img src={item.img}  className="w-full h-64 object-cover" />
            <div className="p-3 text-center">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
