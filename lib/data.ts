// lib/data.ts
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "product-1",
    src: "/images/jggery6.png",
    content: "Jaggery (Gur)",
    summary:
      "Natural, chemical-free jaggery made from fresh sugarcane juice. Rich in minerals and traditional flavor, perfect for sweets, tea, or daily consumption as a healthy sugar alternative.",
    price: 160,
    priceLabel: "₹160 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🟤",
    longDescription:
      "Our Jaggery (Gur) is crafted using time-honored methods passed down through generations. Sourced directly from sugarcane farms in Maharashtra, every block is slow-boiled in iron vessels to preserve its natural golden color and rich mineral content. Free from any chemicals, preservatives, or artificial additives — this is jaggery the way nature intended.",
    benefits: [
      "Rich in iron, magnesium, and potassium",
      "Aids digestion and detoxification",
      "Natural energy booster",
      "Healthier alternative to refined sugar",
      "Boosts immunity with antioxidants",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg",
    details:
      "Our Jaggery (Gur) is sourced directly from organic sugarcane farms in Maharashtra. Produced using traditional open-pan methods without any chemical processing.",
  },
  {
    id: "product-2",
    src: "/images/Jaggery-Powder.png",
    content: "Jaggery Powder",
    summary:
      "Finely powdered jaggery with the same natural sweetness and nutrients as solid jaggery. Easy to dissolve and ideal for tea, coffee, desserts, and everyday cooking.",
    price: 180,
    priceLabel: "₹180 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🫙",
    longDescription:
      "Jaggery Powder offers all the goodness of traditional block jaggery in a convenient, easy-to-use form. Stone-ground from premium quality solid jaggery, it dissolves instantly in hot or cold beverages.",
    benefits: [
      "Instant dissolving — no need to chop or grate",
      "Same nutritional profile as solid jaggery",
      "Perfect for baking and beverage sweetening",
      "No added sugar or fillers",
      "Longer shelf life when stored properly",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg",
    details:
      "Jaggery Powder is made by grinding premium quality solid jaggery into a fine, free-flowing powder.",
  },
  {
    id: "product-3",
    src: "/images/kakvi.avif",
    content: "Liquid Jaggery (Kakvi)",
    summary:
      "Traditional liquid jaggery made from concentrated sugarcane juice. Smooth, rich, and naturally sweet — perfect for drizzling on chapati, roti, or mixing into warm milk.",
    price: 220,
    priceLabel: "₹220 / liter",
    unit: "liter",
    category: "Natural Sweetener",
    emoji: "🍯",
    longDescription:
      "Liquid Jaggery, known locally as Kakvi, is the rich, viscous nectar extracted during the jaggery-making process. With its deep amber color and complex molasses-like sweetness, it is a beloved ingredient in traditional Indian households.",
    benefits: [
      "Highest concentration of minerals among jaggery forms",
      "Deep, complex flavor with natural molasses notes",
      "Excellent for traditional recipes and Ayurveda",
      "No water or artificial thickeners added",
      "Supports digestive health",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500ml, 1L, 5L",
    details:
      "Liquid Jaggery (Kakvi) is a traditional product from the sugarcane belt of Maharashtra.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}