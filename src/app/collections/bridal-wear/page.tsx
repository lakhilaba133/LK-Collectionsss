// src/app/collections/bridal-wear/page.tsx
import CollectionPage from "@/components/CollectionPage";

const products = [
  { id: 1, excerpt: "Signature bridal lehenga", details: "Handcrafted with modern and traditional designs, perfect for weddings.", src: "/images/image17.png", category: "Bridal Wear" },
  
];

export default function BridalWearPage() {
  return <CollectionPage collectionName="Bridal Wear" products={products} />;
}
