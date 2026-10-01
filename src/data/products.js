export const products = [
  {
    id: "product-001",
    slug: "premium-100-cotton-dyeable-base",
    name: "Premium 100% Cotton Dyeable Base",
    category: "Dyeable Base",
    images: [
      "/images/gallery_dyeing.jpg",
      "/images/about_craft.jpg"
    ],
    price: 150,
    priceUnit: "meter",
    showPrice: true,
    description: "Ultra-absorbent premium pure cotton fabric base ideal for custom dye vats, screen printing, and hand block craft.",
    fabricType: "Pure Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "60 GSM",
    badge: "Best Seller",
    featured: true,
    available: true
  },
  {
    id: "product-002",
    slug: "pure-chiffon-mulberry-silk-dyeable",
    name: "Pure Chiffon & Mulberry Silk Dyeable",
    category: "Dyeable Base",
    images: [
      "/images/hero_textile.jpg",
      "/images/gallery_dyeing.jpg"
    ],
    price: 450,
    priceUnit: "meter",
    showPrice: true,
    description: "Lightweight, sheer silk chiffons that take vibrant natural dyes and synthetic color fastness with radiant sheen.",
    fabricType: "Mulberry Silk Chiffon",
    moq: "5 meters",
    width: "44 inches",
    gsm: "40 GSM",
    badge: "Luxury Base",
    featured: true,
    available: true
  },
  {
    id: "product-003",
    slug: "artisanal-indigo-shibori-patterned-fabric",
    name: "Artisanal Indigo Shibori Patterned Fabric",
    category: "Traditional Prints",
    images: [
      "/images/gallery_shibori.jpg",
      "/images/client_green_shibori.jpg"
    ],
    price: 280,
    priceUnit: "meter",
    showPrice: true,
    description: "Authentic spiderweb & wave resist tie-dyed cotton meters suitable for designer dupattas, kurtis, and ethnic wear.",
    fabricType: "Fine Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "80 GSM",
    badge: "Handcrafted",
    featured: true,
    available: true
  },
  {
    id: "product-004",
    slug: "hand-carved-teak-wooden-block-printed-cotton",
    name: "Hand Carved Teak Wooden Block Printed Cotton",
    category: "Traditional Prints",
    images: [
      "/images/gallery_block_print.jpg",
      "/images/client_block_prints.jpg"
    ],
    price: 220,
    priceUnit: "meter",
    showPrice: true,
    description: "Classic terracotta & indigo floral paisley block stamping using eco-friendly fast dyes on fine weave cotton.",
    fabricType: "100% Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "75 GSM",
    badge: "Heritage Print",
    featured: false,
    available: true
  },
  {
    id: "product-005",
    slug: "kalamkari-hand-block-printed-yardage",
    name: "Kalamkari Hand Block Printed Yardage",
    category: "Traditional Prints",
    images: [
      "/images/client_kalamkari_table.jpg"
    ],
    price: 320,
    priceUnit: "meter",
    showPrice: true,
    description: "Rich peacock vine and floral storytelling motifs stamped with organic vegetable dyes.",
    fabricType: "Natural Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "85 GSM",
    badge: "Classic Indian",
    featured: false,
    available: true
  },
  {
    id: "product-006",
    slug: "crackle-texture-batik-wax-resist-fabric-roll",
    name: "Crackle Texture Batik Wax Resist Fabric Roll",
    category: "Wholesale Rolls",
    images: [
      "/images/gallery_batik.jpg"
    ],
    price: 0,
    priceUnit: "meter",
    showPrice: false,
    description: "Distinctive fine crackle wax-resist dyed fabric roll, available in factory bulk quantities.",
    fabricType: "Cotton Cambric",
    moq: "20 meters",
    width: "44 inches",
    gsm: "80 GSM",
    badge: "Factory Bulk",
    featured: true,
    available: true
  },
  {
    id: "product-007",
    slug: "kamdhenu-pichwai-lotus-printed-yardage",
    name: "Kamdhenu Pichwai & Lotus Printed Yardage",
    category: "Traditional Prints",
    images: [
      "/images/client_pichwai_print.jpg"
    ],
    price: 340,
    priceUnit: "meter",
    showPrice: true,
    description: "Traditional Pichwai sacred cow motifs with blossoming lotuses and meandering vines printed on regal plum yardage.",
    fabricType: "Pure Cotton / Silk Blend",
    moq: "10 meters",
    width: "44 inches",
    gsm: "80 GSM",
    badge: "Heritage Craft",
    featured: true,
    available: true
  },
  {
    id: "product-008",
    slug: "master-artisan-ombre-floral-saree",
    name: "Master Artisan Ombre Floral Printed Saree",
    category: "Traditional Prints",
    images: [
      "/images/client_artisan_saree_table.jpg"
    ],
    price: 1850,
    priceUnit: "saree",
    showPrice: true,
    description: "Exclusive peach-to-coral ombre gradation hand-printed saree featuring ornate floral pallu and booti motifs on our workshop table.",
    fabricType: "Dyeable Georgette / Kota",
    moq: "1 Saree",
    width: "44 inches",
    gsm: "65 GSM",
    badge: "Workshop Craft",
    featured: true,
    available: true
  },
  {
    id: "product-009",
    slug: "pleated-emerald-wave-shibori-fabric",
    name: "Pleated Emerald & Dark Green Shibori Fabric",
    category: "Traditional Prints",
    images: [
      "/images/client_green_shibori.jpg"
    ],
    price: 290,
    priceUnit: "meter",
    showPrice: true,
    description: "Hand-pleated and clamped Shibori wave resist dye in rich emerald green with circular bottom border accents.",
    fabricType: "100% Fine Cotton",
    moq: "10 meters",
    width: "44 inches",
    gsm: "75 GSM",
    badge: "Artisanal Tie-Dye",
    featured: true,
    available: true
  }
];

export const productCategories = [
  "All",
  "Dyeable Base",
  "Traditional Prints",
  "Wholesale Rolls"
];

// Helper to dynamically extract categories and meta directly from products array
export const getDynamicCategories = () => {
  const categoriesSet = [...new Set(products.map((p) => p.category))];
  
  return categoriesSet.map((catName) => {
    const categoryProducts = products.filter((p) => p.category === catName);
    const firstProd = categoryProducts[0];
    const image = (firstProd && firstProd.images && firstProd.images[0]) || (firstProd && firstProd.image) || '/images/gallery_dyeing.jpg';

    return {
      id: catName.toLowerCase().replace(/\s+/g, '-'),
      category: catName,
      title: `${catName} Collection`,
      subtitle: `${categoryProducts.length} Premium Fabric ${categoryProducts.length === 1 ? 'Item' : 'Items'} Available`,
      image: image,
      count: categoryProducts.length
    };
  });
};

export default products;
