import { Product } from '@/types';

const sharedLongDescription = `Jaggery is a traditional unrefined natural sweetener produced from fresh sugarcane juice, widely used as a healthier alternative to refined sugar because it retains natural minerals and nutrients. Our jaggery is manufactured using a traditional and hygienic process without the use of harmful chemicals or artificial additives, preserving the natural taste, aroma, and nutritional value of sugarcane.

Product Features: 100% Natural Cane Jaggery · Chemical Free Processing · No Artificial Colors · No Sulphur Treatment · Rich in Natural Minerals · Hygienically Processed · Export Quality Standards.

Chemical Composition: Sucrose 65–85% · Reducing Sugars 10–25% · Total Carbohydrates 85–95% · Protein 0.5–1% · Energy approx. 370–390 kcal/100g.

Nutritional Value: Jaggery naturally contains essential minerals including Iron, Calcium, Magnesium, and Potassium — making it a more nutritious alternative to refined sugar.

Product Specifications: Color — Golden Brown to Dark Brown · Taste — Naturally Sweet · Aroma — Characteristic Jaggery Aroma · Texture — Smooth and Non-Sticky · Solubility — Easily Soluble in Water.

Jaggery is widely used in the food industry, beverage manufacturing, bakery products, confectionery, and health foods across global markets.`;

const powderLongDescription = `Jaggery Powder is stone-ground from premium natural jaggery blocks, preserving all trace minerals and antioxidants. Produced from fresh sugarcane juice using a traditional and hygienic process — chemical-free, no artificial colors, no sulphur treatment.

Product Features: 100% Natural Cane Jaggery · Chemical Free Processing · No Artificial Colors · No Sulphur Treatment · Instant Dissolving · Export Quality Standards.

Chemical Composition: Sucrose 65–85% · Reducing Sugars 10–25% · Total Carbohydrates 85–95% · Protein 0.5–1% · Energy approx. 370–390 kcal/100g.

Moisture Content: Jaggery Powder — 5% to 8%. Low moisture content helps prevent fungal growth and increases shelf life during storage and transportation.

Nutritional Value: Naturally contains Iron, Calcium, Magnesium, and Potassium. A more nutritious alternative to refined sugar.

Product Specifications: Color — Golden Brown · Taste — Naturally Sweet · Texture — Fine Powder · Solubility — Easily Soluble in Water.

Ideal for tea, coffee, bakery products, confectionery, health foods, and beverage manufacturing across global markets.`;

export const products: Product[] = [
  {
    id: 'Product 1',
    src: '/images/jggery6.png',
    content: 'Natural Jaggery (Gur)',
    summary: 'Premium chemical-free jaggery made from fresh sugarcane juice using traditional methods. Rich in minerals, deep in flavor — the purest form of natural sweetness.',
    price: 64,
    priceLabel: 'Rs 64/kg',
    category: 'Solid Jaggery',
    hsCode: 'HS CODE : 17011410',
    emoji: '🟫',
    benefits: ['Rich in iron and minerals', 'Chemical-free and unrefined', 'Natural energy booster', 'Boosts immunity with antioxidants'],
    unit: 'per kg',
    longDescription: `Our Natural Jaggery is crafted using time-honored methods passed down through generations. Sourced directly from sugarcane farms in Maharashtra, every block is slow-boiled in iron vessels to preserve its natural golden color and rich mineral content.\n\n${sharedLongDescription}\n\nMoisture Content (Block): 6% to 10%.`,
    origin: 'Maharashtra, India',
    weight: '1 kg',
    shelfLife: '9 to 12 months',
    storageConditions: ['Store in a cool and dry place', 'Avoid direct sunlight', 'Protect from moisture and humidity'],
    inStock: true,
  },
  {
    id: 'Product 2',
    src: '/images/jggery6.png',
    content: 'Regular Jaggery (Gur)',
    summary: 'Classic jaggery made from sugarcane juice — a wholesome, everyday natural sweetener perfect for tea, sweets, and traditional cooking.',
    price: 50,
    priceLabel: 'Rs 50/kg',
    category: 'Solid Jaggery',
    hsCode: 'HS CODE : 17011410',
    emoji: '🟫',
    benefits: ['Natural sweetener', 'Good source of iron and calcium', 'Supports digestion', 'Affordable daily-use sweetener'],
    unit: 'per kg',
    longDescription: `Our Regular Jaggery offers the familiar taste and goodness of traditional Indian jaggery at an accessible price. Made from fresh sugarcane juice and processed without harmful chemicals — ideal for everyday use in households, tea stalls, and food businesses.\n\n${sharedLongDescription}\n\nMoisture Content (Block): 6% to 10%.`,
    origin: 'Maharashtra, India',
    weight: '1 kg',
    shelfLife: '9 to 12 months',
    storageConditions: ['Store in a cool and dry place', 'Avoid direct sunlight', 'Protect from moisture and humidity'],
    inStock: true,
  },
  {
    id: 'Product 3',
    src: '/images/Jaggery-Powder.png',
    content: 'Natural Jaggery Powder',
    summary: 'Finely ground from premium natural jaggery — retains all minerals and nutrients. Easy to dissolve, ideal for tea, coffee, desserts, and health-conscious cooking.',
    price: 69,
    priceLabel: 'Rs 69/kg',
    category: 'Powdered Jaggery',
    hsCode: 'HS CODE : 17011420',
    emoji: '🟤',
    benefits: ['Instant dissolving', 'Full nutrition of natural jaggery', 'No added preservatives or fillers', 'Mineral rich'],
    unit: 'per kg',
    longDescription: `Our Natural Jaggery Powder is stone-ground from premium natural jaggery blocks, retaining all trace minerals and antioxidants for maximum nutritional value.\n\n${powderLongDescription}`,
    origin: 'Maharashtra, India',
    weight: '1 kg',
    shelfLife: '9 to 12 months',
    storageConditions: ['Store in a cool and dry place', 'Avoid direct sunlight', 'Protect from moisture and humidity'],
    inStock: true,
  },
  {
    id: 'Product 4',
    src: '/images/Jaggery-Powder.png',
    content: 'Regular Jaggery Powder',
    summary: 'Convenient powdered jaggery for everyday use. Dissolves quickly in hot and cold drinks, great for traditional recipes, sweets, and snacks.',
    price: 53,
    priceLabel: 'Rs 53/kg',
    category: 'Powdered Jaggery',
    hsCode: 'HS CODE : 17011420',
    emoji: '🟤',
    benefits: ['Easy to measure and use', 'Dissolves quickly', 'Natural sweetener', 'Cost-effective bulk option'],
    unit: 'per kg',
    longDescription: `Regular Jaggery Powder brings the ease of powdered sweetener with the wholesome goodness of jaggery. An everyday essential for households, food businesses, and export markets.\n\n${powderLongDescription}`,
    origin: 'Maharashtra, India',
    weight: '1 kg',
    shelfLife: '9 to 12 months',
    storageConditions: ['Store in a cool and dry place', 'Avoid direct sunlight', 'Protect from moisture and humidity'],
    inStock: true,
  },
  {
    id: 'Product 5',
    src: '/images/kakvi.avif',
    content: 'Natural Liquid Jaggery (Kakvi)',
    summary: 'Traditional liquid jaggery made from pure sugarcane juice. Rich, smooth, and deeply flavored — perfect for chapati, milk, or Ayurvedic preparations.',
    price: 130,
    priceLabel: 'Rs 130/liter',
    category: 'Liquid Jaggery',
    hsCode: 'HS CODE : 170290',
    emoji: '🫙',
    benefits: ['Highest mineral concentration', 'Ready to use', 'Traditional Maharashtrian recipe', 'No preservatives or thickeners'],
    unit: 'per liter',
    longDescription: `Natural Liquid Jaggery, known locally as Kakvi, is the rich amber nectar extracted during the natural jaggery-making process. With its deep molasses-like sweetness and dense mineral content, it is a prized ingredient in traditional Indian households and Ayurvedic kitchens.

Produced from fresh sugarcane juice using a chemical-free, traditional process — no artificial colors, no sulphur treatment, no preservatives.

Chemical Composition: Sucrose 65–85% · Reducing Sugars 10–25% · Total Carbohydrates 85–95% · Protein 0.5–1% · Energy approx. 370–390 kcal/100g.

Nutritional Value: Naturally contains Iron, Calcium, Magnesium, and Potassium. Higher mineral concentration than solid jaggery forms due to retained molasses content.

Product Specifications: Color — Deep Amber to Dark Brown · Taste — Rich, Naturally Sweet · Texture — Viscous, Smooth · Solubility — Fully Soluble in Water.

Used in traditional cooking, health preparations, Ayurvedic formulations, and as a natural sweetener in food and beverage manufacturing.`,
    origin: 'Maharashtra, India',
    weight: '1 liter',
    shelfLife: '6 months',
    storageConditions: ['Refrigerate after opening', 'Keep container tightly sealed', 'Protect from moisture and humidity'],
    inStock: true,
  },
  {
    id: 'Product 6',
    src: '/images/jggery6.png',
    content: 'Other Agro Products',
    summary: 'We are expanding our range of premium agro products. Stay tuned for new additions from the farms of Maharashtra — coming soon.',
    price: 0,
    priceLabel: 'Coming Soon',
    category: 'Agro Products',
    hsCode: '',
    emoji: '🌾',
    benefits: ['Directly sourced from farmers', 'Export-ready quality', 'Sustainably grown', 'Custom sourcing available'],
    unit: 'per kg',
    longDescription: 'Namaste Global is continuously working to bring more high-quality agro products to market. Contact us to inquire about specific commodities or bulk sourcing requirements.',
    origin: 'Maharashtra, India',
    weight: 'TBD',
    inStock: false,
  },
];

export const getProductById = (id: string) =>
  products.find((p) => p.id === id) ?? null;
export const data = products;