// lib/data.ts
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "product-1",
    src: "/images/jggery6.png",
    content: "Natural Jaggery (Gur)",
    summary:
      "Premium chemical-free jaggery made from fresh sugarcane juice using traditional methods. Rich in minerals, deep in flavor — the purest form of natural sweetness.",
    price: 64,
    priceLabel: "₹64 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🟤",
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
    details:
      "Our Natural Jaggery is sourced directly from organic sugarcane farms in Maharashtra. Produced using traditional open-pan methods without any chemical processing.",
  },
  {
    id: "product-2",
    src: "/images/jggery6.png",
    content: "Regular Jaggery (Gur)",
    summary:
      "Classic jaggery made from sugarcane juice — a wholesome, everyday natural sweetener perfect for tea, sweets, and traditional cooking.",
    price: 50,
    priceLabel: "₹50 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🟤",
    longDescription:
      "Our Regular Jaggery offers the familiar taste and goodness of traditional Indian jaggery at an accessible price. Made from fresh sugarcane juice and processed without harmful chemicals, it is ideal for everyday use in households, tea stalls, and food businesses.",
    benefits: [
      "Natural sweetener with no refined sugar",
      "Good source of iron and calcium",
      "Supports digestion",
      "Versatile for cooking, baking, and beverages",
      "Affordable daily-use sweetener",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg, 10kg, 30kg",
    details:
      "Regular Jaggery is produced from fresh sugarcane juice using standard processing methods, making it a reliable and affordable everyday sweetener.",
  },
  {
    id: "product-3",
    src: "/images/Jaggery-Powder.png",
    content: "Natural Jaggery Powder",
    summary:
      "Finely ground from premium natural jaggery — retains all minerals and nutrients in an easy-to-dissolve form. Ideal for tea, coffee, desserts, and health-conscious cooking.",
    price: 69,
    priceLabel: "₹69 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🫙",
    longDescription:
      "Natural Jaggery Powder is stone-ground from our premium natural jaggery blocks, preserving all the trace minerals and antioxidants. It dissolves instantly, making it the perfect substitute for refined sugar in any recipe.",
    benefits: [
      "Instant dissolving — no chopping or grating",
      "Full nutritional profile of natural jaggery",
      "Perfect for baking, beverages, and desserts",
      "No added sugar, fillers, or preservatives",
      "Longer shelf life when stored in a cool dry place",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg",
    details:
      "Natural Jaggery Powder is made by grinding premium natural jaggery into a fine, free-flowing powder without any additives.",
  },
  {
    id: "product-4",
    src: "/images/Jaggery-Powder.png",
    content: "Regular Jaggery Powder",
    summary:
      "Convenient powdered jaggery for everyday use. Dissolves quickly in hot and cold drinks, and works great in traditional recipes, sweets, and snacks.",
    price: 53,
    priceLabel: "₹53 / kg",
    unit: "kg",
    category: "Natural Sweetener",
    emoji: "🫙",
    longDescription:
      "Regular Jaggery Powder brings the ease and convenience of powdered sweetener with the wholesome goodness of jaggery. An everyday essential for households and food businesses alike.",
    benefits: [
      "Easy to measure and use in recipes",
      "Dissolves quickly in hot or cold beverages",
      "Natural sweetener without refined sugar",
      "Great for laddoos, chutneys, and marinades",
      "Cost-effective bulk option available",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500g, 1kg, 5kg, 10kg, 30kg",
    details:
      "Regular Jaggery Powder is produced by grinding standard jaggery into a consistent fine powder, suitable for high-volume use.",
  },
  {
    id: "product-5",
    src: "/images/kakvi.avif",
    content: "Natural Liquid Jaggery (Kakvi)",
    summary:
      "Traditional liquid jaggery made from pure sugarcane juice — rich, smooth, and deeply flavored. Perfect for drizzling on chapati, mixing into milk, or use in Ayurvedic preparations.",
    price: 130,
    priceLabel: "₹130 / liter",
    unit: "liter",
    category: "Natural Sweetener",
    emoji: "🍯",
    longDescription:
      "Natural Liquid Jaggery, known locally as Kakvi, is the rich amber nectar extracted during the natural jaggery-making process. With its deep molasses-like sweetness and dense mineral content, it is a prized ingredient in traditional Indian households and Ayurvedic kitchens.",
    benefits: [
      "Highest concentration of minerals among all jaggery forms",
      "Deep, complex flavor with natural molasses notes",
      "Excellent for traditional recipes and Ayurveda",
      "No water or artificial thickeners added",
      "Supports digestive health and detoxification",
    ],
    origin: "Maharashtra, India",
    weight: "Available in 500ml, 1L, 5L",
    details:
      "Natural Liquid Jaggery (Kakvi) is a traditional product from the sugarcane belt of Maharashtra, made without any additives or dilution.",
  },
  {
    id: "product-6",
    src: "/images/jggery6.png",
    content: "Other Agro Products",
    summary:
      "We are expanding our range of premium agro products. Stay tuned for new additions from the farms of Maharashtra — coming soon.",
    price: 0,
    priceLabel: "Coming Soon",
    unit: "kg",
    category: "Agro Products",
    emoji: "🌾",
    longDescription:
      "Namaste Global is continuously working to bring more high-quality agro products to market. Our upcoming range will include a variety of farm-fresh produce sourced directly from trusted farmers across Maharashtra and beyond. We are committed to quality, sustainability, and fair trade.",
    benefits: [
      "Directly sourced from trusted farmers",
      "Quality-checked and export-ready",
      "Sustainably grown and processed",
      "Wide variety of agro commodities",
      "Custom sourcing available on request",
    ],
    origin: "Maharashtra, India",
    weight: "TBD",
    details:
      "Future agro products will be listed here. Contact us to inquire about specific commodities or bulk sourcing requirements.",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}