// src/app/collections/daily-wear/page.tsx
import CollectionPage from "@/components/CollectionPage";

interface Product {
  id: number;
  excerpt: string;
  details: string;
  src: string;
  category: string;
}

const products: Product[] = [
 {
   id: 1,
    excerpt: "Floral inspired outfit for a fresh and graceful daily look.",
    details:
      "This 2-piece suit features elegant floral prints with soft tones, giving a soothing yet stylish touch perfect for everyday comfort.",
    src: "/images/dailywear1.png",
    category: "Daily Wear",
  },
  {
    id: 2,
    excerpt: "Stylish geometric print suit designed for effortless daily charm.",
    details:
      "A perfect fusion of modern and traditional design, made for those who want to stand out gracefully. Its unique print and soft texture make it ideal for casual outings or office wear.",
    src: "/images/dailywear2.png",
    category: "Daily Wear",
  },
  {
    id: 3,
    excerpt: "Soft-toned outfit with subtle floral artistry and elegant flow.",
    details:
      "Crafted from breathable fabric, this suit combines pastel shades with delicate prints, giving you a serene and comfortable look for daytime wear.",
    src: "/images/dailywear3.png",
    category: "Daily Wear",
  },
  {
    id: 4,
    excerpt: "Elegant Pink and white contrast suit for timeless daily elegance.",
    details:
      "This outfit merges minimalistic prints with classic tones, creating a balanced and refined everyday style. Perfect for both casual and semi-formal looks.",
    src: "/images/dailywear4.png",
    category: "Daily Wear",
  },
  {
    id: 5,
    excerpt: "Trendy abstract printed suit with soft and breathable fabric.",
    details:
      "Designed for ultimate comfort, this daily wear ensemble adds charm with its lively prints and lightweight texture — ideal for a refreshing daytime appearance.",
    src: "/images/dailywear5.png",
    category: "Daily Wear",
  },
  {
    id: 6,
    excerpt: "Chic beige and pink tones with floral accents for modern style.",
    details:
      "A perfect everyday outfit combining gentle hues and contemporary patterns. The elegant design adds grace and comfort to your wardrobe.",
    src: "/images/dailywear6.png",
    category: "Daily Wear",
  },
  {
    id: 7,
    excerpt: "Floral inspired outfit for a fresh and graceful daily look.",
    details:
      "This 2-piece suit features elegant floral prints with soft tones, giving a soothing yet stylish touch perfect for everyday comfort.",
    src: "/images/dailywear7.png",
    category: "Daily Wear",
  },

  {
    id: 8,
    excerpt: "Graceful black and beige 2-piece suit with floral and stripe contrast.",
    details:
      "This elegant daily wear suit features a beautiful blend of beige tones and black floral prints. The breathable fabric and modern pattern make it perfect for everyday comfort with a touch of style.",
    src: "/images/dailywear8.png",
    category: "Daily Wear",
  },
  
];

  


export default function StichCollectionPage() {
  return <CollectionPage collectionName="Daily Wear" products={products} />;
}
