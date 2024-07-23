const productsData = [
  {
    name: "Blossom Embrace",
    category: "Floral",
    price: 49.99,
    description:
      "Blossom Embrace is a delicate and romantic blend of peonies, roses, and jasmine. This enchanting fragrance captures the essence of a blooming garden, bringing a touch of elegance and grace to your day. Perfect for those who love a soft, floral scent that is both timeless and sophisticated.",
    img: "https://images.unsplash.com/photo-1672848700942-68b6a4550540?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    name: "Petal Symphony",
    category: "Floral",
    price: 54.99,
    description:
      "Petal Symphony offers a harmonious mix of gardenia, magnolia, and lily of the valley. This perfume is a true celebration of nature's most beautiful flowers, creating a scent that is fresh, vibrant, and captivating. Ideal for everyday wear or special occasions.",
    img: "https://images.unsplash.com/photo-1667480099552-92bfee05685d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml"],
  },
  {
    name: "Rose Reverie",
    category: "Floral",
    price: 59.99,
    description:
      "Rose Reverie is a captivating scent featuring notes of rose, violet, and freesia. This luxurious perfume evokes the beauty of a rose garden in full bloom, with a delicate balance of floral notes that linger softly on the skin. Perfect for adding a touch of romance to your fragrance collection.",
    img: "https://images.unsplash.com/photo-1701291927826-c7775869d822?q=80&w=2810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml", "100ml"],
  },
  {
    name: "Forest Essence",
    category: "Woody",
    price: 69.99,
    description:
      "Forest Essence is an earthy and grounding combination of cedarwood, sandalwood, and vetiver. This rich, woody fragrance transports you to a serene forest, offering a calming and centering experience. Ideal for those who appreciate a natural, outdoorsy scent.",
    img: "https://images.unsplash.com/photo-1673443143036-ef6eec48c595?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    name: "Amber Woods",
    category: "Woody",
    price: 74.99,
    description:
      "Amber Woods is a warm and rich blend of amber, patchouli, and oakmoss. This sophisticated perfume exudes a sense of luxury and depth, with its earthy notes creating a captivating and lasting impression. Perfect for evening wear or special events.",
    img: "https://images.unsplash.com/photo-1664198891866-8a35b73bb95f?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml"],
  },
  {
    name: "Mystic Grove",
    category: "Woody",
    price: 79.99,
    description:
      "Mystic Grove offers a sophisticated mix of mahogany, pine, and bergamot. This intriguing fragrance combines the freshness of pine with the warmth of mahogany, creating a unique and memorable scent. Ideal for those who love a complex and refined woody aroma.",
    img: "https://images.unsplash.com/photo-1666621630026-862eea07236c?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml"],
  },
  {
    name: "Ocean Breeze",
    category: "Fresh",
    price: 39.99,
    description:
      "Ocean Breeze is a refreshing and invigorating blend of sea salt, citrus, and marine notes. This vibrant perfume captures the essence of a day by the sea, with its crisp and clean aroma revitalizing your senses. Perfect for a fresh, everyday fragrance.",
    img: "https://images.unsplash.com/photo-1676139412671-00742a9920a8?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    name: "Morning Dew",
    category: "Fresh",
    price: 44.99,
    description:
      "Morning Dew is a crisp and clean scent with notes of green tea, cucumber, and mint. This light and refreshing perfume is perfect for starting your day with a burst of freshness, leaving you feeling revitalized and energized. Ideal for those who prefer a subtle yet invigorating scent.",
    img: "https://images.unsplash.com/photo-1637336698223-0d5f048b09ee?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml", "100ml"],
  },
  {
    name: "Citrus Zest",
    category: "Fresh",
    price: 49.99,
    description:
      "Citrus Zest is a vibrant and zesty mix of lemon, lime, and grapefruit. This lively fragrance is perfect for adding a touch of brightness to your day, with its tangy and refreshing notes uplifting your spirits. Ideal for a fresh, citrusy scent that stands out.",
    img: "https://images.unsplash.com/photo-1716978499366-d5a84bf1fe70?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml", "120ml"],
  },
  {
    name: "Spice Bazaar",
    category: "Oriental",
    price: 89.99,
    description:
      "Spice Bazaar is a warm and exotic blend of cinnamon, clove, and vanilla. This enchanting perfume evokes the vibrant atmosphere of a spice market, with its rich and spicy notes creating a mesmerizing aroma. Perfect for those who love a bold and distinctive scent.",
    img: "https://images.unsplash.com/photo-1700665053090-e64274eeba84?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    name: "Velvet Amber",
    category: "Oriental",
    price: 94.99,
    description:
      "Velvet Amber is a luxurious mix of amber, musk, and saffron. This opulent fragrance exudes sophistication and elegance, with its warm and sensual notes enveloping you in a velvety embrace. Ideal for evening wear or special occasions when you want to make a statement.",
    img: "https://images.unsplash.com/photo-1718337747653-1bbf11072b77?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml", "100ml"],
  },
  {
    name: "Mystique Orient",
    category: "Oriental",
    price: 99.99,
    description:
      "Mystique Orient is an enchanting blend of incense, cardamom, and oud. This exotic perfume captures the allure of the Orient, with its rich and mysterious notes creating a captivating and unforgettable scent. Perfect for those who appreciate a deep and intriguing fragrance.",
    img: "https://images.unsplash.com/photo-1639640030255-e3129b069f52?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml", "90ml"],
  },
  {
    name: "Berry Bliss",
    category: "Fruity",
    price: 34.99,
    description:
      "Berry Bliss is a playful and sweet combination of strawberry, raspberry, and blackcurrant. This delightful perfume is perfect for those who love a fruity and vibrant scent, with its juicy notes bringing a touch of joy and freshness to your day. Ideal for casual wear.",
    img: "https://images.unsplash.com/photo-1718337749039-d8fa775ef330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml"],
  },
  {
    name: "Tropical Sunset",
    category: "Fruity",
    price: 39.99,
    description:
      "Tropical Sunset is a vibrant mix of mango, pineapple, and passionfruit. This exotic fragrance transports you to a tropical paradise, with its luscious and fruity notes creating a refreshing and uplifting aroma. Perfect for adding a touch of sunshine to your fragrance collection.",
    img: "https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?q=80&w=2703&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml", "100ml"],
  },
  {
    name: "Peach Nectar",
    category: "Fruity",
    price: 44.99,
    description:
      "Peach Nectar is a juicy and luscious blend of peach, apricot, and nectarine. This delightful perfume captures the essence of ripe, sun-kissed fruits, with its sweet and fresh notes leaving a lasting impression. Ideal for those who love a fruity and cheerful scent.",
    img: "https://images.unsplash.com/photo-1632928145408-ef47a7672964?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml", "120ml"],
  },
  {
    name: "Vanilla Dream",
    category: "Gourmand",
    price: 59.99,
    description:
      "Vanilla Dream is a delectable mix of vanilla, caramel, and chocolate. This indulgent perfume is perfect for those who love sweet and gourmand scents, with its rich and creamy notes creating a mouthwatering aroma. Ideal for adding a touch of sweetness to your day.",
    img: "https://images.unsplash.com/photo-1706924179763-7f2744656823?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "50ml", "100ml"],
  },
  {
    name: "Sugar Rush",
    category: "Gourmand",
    price: 64.99,
    description:
      "Sugar Rush is a sweet and indulgent blend of cotton candy, marshmallow, and praline. This playful fragrance is perfect for those who love a sugary and fun scent, with its delightful notes bringing a sense of joy and nostalgia. Ideal for casual wear and special moments.",
    img: "https://images.unsplash.com/photo-1673442598728-71caf1f15820?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["50ml", "100ml"],
  },
  {
    name: "Café Mocha",
    category: "Gourmand",
    price: 69.99,
    description:
      "Café Mocha is a rich and creamy mix of coffee, cocoa, and vanilla bean. This luxurious perfume is perfect for those who love the comforting and delicious scent of a café, with its warm and inviting notes creating a cozy and delectable aroma. Ideal for everyday wear.",
    img: "https://images.unsplash.com/photo-1706408604086-144590f4020a?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sizes: ["30ml", "60ml"],
  },
];

export default productsData;
