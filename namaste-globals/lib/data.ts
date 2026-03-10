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
    content: "Natural Jaggery (Gur)",
    summary:
      "Premium chemical-free jaggery made from fresh sugarcane juice using traditional methods. Rich in minerals, deep in flavor — the purest form of natural sweetness.",
    price: 64,
    unit: "kg",
    category: "Natural Sweetener",
    longDescription:
      "Our Natural Jaggery (Gur) is crafted using time-honored methods passed down through generations. Sourced directly from sugarcane farms in Maharashtra, every block is slow-boiled in iron vessels to preserve its natural golden color and rich mineral content. Free from any chemicals, preservatives, or artificial additives — this is jaggery the way nature intended.",
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
    src: "/images/jggery6.png",
    content: "Regular Jaggery (Gur)",
    summary:
      "Classic jaggery made from sugarcane juice — a wholesome, everyday natural sweetener perfect for tea, sweets, and traditional cooking.",
    price: 50,
    unit: "kg",
    category: "Natural Sweetener",
    longDescription:
      "Our Regular Jaggery offers the familiar taste and goodness of traditional Indian jaggery at an accessible price. Made from fresh sugarcane juice and processed without harmful chemicals, it is ideal for everyday use in households, tea stalls, and food businesses.",
    benefits: [
      "Natural sweetener with no refined sugar",
      "Good source of iron and calcium",
      "Supports digestion",
      "Versatile for cooking and beverages",
      "Affordable daily-use sweetener",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg, 10kg, 30kg",
  },
  {
    id: "product-3",
    src: "/images/Jaggery-Powder.png",
    content: "Natural Jaggery Powder",
    summary:
      "Finely ground from premium natural jaggery — retains all minerals and nutrients in an easy-to-dissolve form. Ideal for tea, coffee, desserts, and health-conscious cooking.",
    price: 69,
    unit: "kg",
    category: "Natural Sweetener",
    longDescription:
      "Natural Jaggery Powder is stone-ground from our premium natural jaggery blocks, preserving all the trace minerals and antioxidants. It dissolves instantly in hot or cold beverages and blends seamlessly into batters, doughs, and sauces — the perfect substitute for refined sugar in any recipe.",
    benefits: [
      "Instant dissolving — no need to chop or grate",
      "Full nutritional profile of natural jaggery",
      "Perfect for baking and beverage sweetening",
      "No added sugar, fillers, or preservatives",
      "Longer shelf life when stored properly",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg",
  },
  {
    id: "product-4",
    src: "/images/Jaggery-Powder.png",
    content: "Regular Jaggery Powder",
    summary:
      "Convenient powdered jaggery for everyday use. Dissolves quickly in hot and cold drinks, and works great in traditional recipes, sweets, and snacks.",
    price: 53,
    unit: "kg",
    category: "Natural Sweetener",
    longDescription:
      "Regular Jaggery Powder brings the ease and convenience of powdered sweetener with the wholesome goodness of jaggery. An everyday essential for households and food businesses alike, it measures easily and blends into any recipe without fuss.",
    benefits: [
      "Easy to measure and use in recipes",
      "Dissolves quickly in hot or cold beverages",
      "Natural sweetener without refined sugar",
      "Great for laddoos, chutneys, and marinades",
      "Cost-effective bulk option available",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg, 10kg, 30kg",
  },
  {
    id: "product-5",
    src: "/images/kakvi.avif",
    content: "Natural Liquid Jaggery (Kakvi)",
    summary:
      "Traditional liquid jaggery made from pure sugarcane juice — rich, smooth, and deeply flavored. Perfect for drizzling on chapati, mixing into milk, or Ayurvedic preparations.",
    price: 130,
    unit: "liter",
    category: "Natural Sweetener",
    longDescription:
      "Natural Liquid Jaggery, known locally as Kakvi, is the rich amber nectar extracted during the natural jaggery-making process. With its deep molasses-like sweetness and dense mineral content, it is a prized ingredient in traditional Indian households and Ayurvedic kitchens. Drizzle over fresh chapati with ghee, swirl into warm milk, or use as a natural sweetener in traditional preparations.",
    benefits: [
      "Highest concentration of minerals among all jaggery forms",
      "Deep, complex flavor with natural molasses notes",
      "Excellent for traditional recipes and Ayurveda",
      "No water or artificial thickeners added",
      "Supports digestive health and detoxification",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500ml, 1L, 5L",
  },
  {
    id: "product-6",
    src: "/images/jggery6.png",
    content: "Other Agro Products",
    summary:
      "We are expanding our range of premium agro products. Stay tuned for new additions from the farms of Maharashtra — coming soon.",
    price: 0,
    unit: "kg",
    category: "Agro Products",
    longDescription:
      "Namaste Global is continuously working to bring more high-quality agro products to market. Our upcoming range will include a variety of farm-fresh produce sourced directly from trusted farmers across Maharashtra and beyond. Contact us to inquire about specific commodities or bulk sourcing requirements.",
    benefits: [
      "Directly sourced from trusted farmers",
      "Quality-checked and export-ready",
      "Sustainably grown and processed",
      "Wide variety of agro commodities",
      "Custom sourcing available on request",
    ],
    origin: "Maharashtra, India",
    weight: "TBD",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}