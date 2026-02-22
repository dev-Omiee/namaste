// lib/data.ts
export interface Product {
  id: string;
  src: string;
  content: string;
  summary: string;
  price: number;
  unit: string;
  category: string;
  longDescription: string;
  benefits: string[];
  origin: string;
  weight: string;
}

export const products: Product[] = [
  {
    id: "product-1",
    src: "/images/jggery6.png",
    content: "Jaggery (Gur)",
    summary:
      "Natural, chemical-free jaggery made from fresh sugarcane juice. Rich in minerals and traditional flavor, perfect for sweets, tea, or daily consumption as a healthy sugar alternative.",
    price: 160,
    unit: "kg",
    category: "Natural Sweetener",
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
  },
  {
    id: "product-2",
    src: "/images/Jaggery-Powder.png",
    content: "Jaggery Powder",
    summary:
      "Finely powdered jaggery with the same natural sweetness and nutrients as solid jaggery. Easy to dissolve and ideal for tea, coffee, desserts, and everyday cooking.",
    price: 180,
    unit: "kg",
    category: "Natural Sweetener",
    longDescription:
      "Jaggery Powder offers all the goodness of traditional block jaggery in a convenient, easy-to-use form. Stone-ground from premium quality solid jaggery, it dissolves instantly in hot or cold beverages and blends seamlessly into batters, doughs, and sauces. A pantry essential for the modern health-conscious kitchen.",
    benefits: [
      "Instant dissolving — no need to chop or grate",
      "Same nutritional profile as solid jaggery",
      "Perfect for baking and beverage sweetening",
      "No added sugar or fillers",
      "Longer shelf life when stored properly",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg",
  },
  {
    id: "product-3",
    src: "/images/kakvi.avif",
    content: "Liquid Jaggery (Kakvi)",
    summary:
      "Traditional liquid jaggery made from concentrated sugarcane juice. Smooth, rich, and naturally sweet — perfect for drizzling on chapati, roti, or mixing into warm milk.",
    price: 220,
    unit: "liter",
    category: "Natural Sweetener",
    longDescription:
      "Liquid Jaggery, known locally as Kakvi, is the rich, viscous nectar extracted during the jaggery-making process. With its deep amber color and complex molasses-like sweetness, it is a beloved ingredient in traditional Indian households. Drizzle it over fresh chapati with ghee, swirl into warm milk, or use as a natural sweetener in Ayurvedic preparations.",
    benefits: [
      "Highest concentration of minerals among jaggery forms",
      "Deep, complex flavor with natural molasses notes",
      "Excellent for traditional recipes and Ayurveda",
      "No water or artificial thickeners added",
      "Supports digestive health",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500ml, 1L, 5L",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
