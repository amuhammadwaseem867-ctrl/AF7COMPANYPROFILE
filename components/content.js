// All copy is taken from the AF7 Professional Profile document.

export const COMPANY = {
  name: "AF7",
  tagline: "Precision in Every Detail.",
  descriptor: "Zipper Manufacturing & Garment Accessories",
  city: "Lahore, Pakistan",
  address: "33B, Punjab Small Industries Corporation, Sunder II, Lahore, Pakistan",
  phone: "+92 313 4710325",
  phoneHref: "tel:+923134710325",
  maps:
    "https://www.google.com/maps/search/?api=1&query=33B%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan",
  mapsEmbed:
    "https://www.google.com/maps?q=33B%20Punjab%20Small%20Industries%20Corporation%20Sunder%20II%20Lahore%20Pakistan&output=embed",
  instagram: "https://www.instagram.com/af7trims?stkn=ZmVyNscHJrY2J1",
  facebook: "https://www.facebook.com/profile.php?id=61584996430125&mibextid=wwXIfr",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "finishes", label: "Finishes" },
  { id: "quality", label: "Quality" },
  { id: "applications", label: "Applications" },
  { id: "contact", label: "Contact" },
];

export const ABOUT = {
  heading: "Precision. Technology. Reliability.",
  body: [
    "AF7 is a specialized zipper manufacturing brand based in Lahore, Pakistan, offering metal, aluminium, nylon, and Vislon zippers along with selected garment accessories. Our manufacturing facility combines modern machinery imported from China with integrated in-house production capabilities.",
    "From zipper tape making and teeth manufacturing to finishing, assembly, quality inspection, and packing, key stages of production are managed under one roof.",
    "We focus on precision manufacturing, consistent product quality, refined finishing, and reliable service to meet the requirements of garment manufacturers, fashion brands, and apparel businesses.",
  ],
  philosophy: "Precision in Every Detail.",
};

const P = "/products";

export const PRODUCT_FILTERS = [
  { id: "all", label: "All" },
  { id: "metal", label: "Metal" },
  { id: "aluminium", label: "Aluminium" },
  { id: "synthetic", label: "Nylon & Vislon" },
  { id: "accessories", label: "Accessories" },
];

export const PRODUCTS = [
  {
    id: "metal-5",
    code: "M·05",
    size: "#5",
    name: "Metal Zippers",
    family: "metal",
    familyLabel: "Metal",
    text: "Robust metal zipper solutions for garments and applications requiring a distinctive, durable fastening component.",
    images: [
      `${P}/brasszippers5/IMG_2086.webp`,
      `${P}/brasszippers5/IMG_2079.webp`,
      `${P}/brasszippers5/IMG_2093.webp`,
      `${P}/brasszippers5/IMG_2078.webp`,
      `${P}/brasszippers5/IMG_2094.webp`,
      `${P}/brasszippers5/IMG_2085.webp`,
    ],
  },
  {
    id: "metal-45",
    code: "M·4.5",
    size: "#4.5",
    name: "Metal Zippers",
    family: "metal",
    familyLabel: "Metal",
    text: "A refined metal zipper option for applications requiring a more compact profile with reliable functionality.",
    images: [
      `${P}/brasszippers4.5/IMG_2091.webp`,
      `${P}/brasszippers4.5/4.5.webp`,
      `${P}/brasszippers4.5/IMG_2089.webp`,
      `${P}/brasszippers4.5/IMG_2100.webp`,
      `${P}/brasszippers4.5/IMG_2102.webp`,
    ],
  },
  {
    id: "aluminium-5",
    code: "A·05",
    size: "#5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    text: "Lightweight aluminium zipper solutions combining functional performance with a distinctive metallic appearance.",
    images: [
      `${P}/alumuniumzippers/aluminium-5.webp`,
      `${P}/brasszippers5/alumunium.webp`,
    ],
  },
  {
    id: "aluminium-45",
    code: "A·4.5",
    size: "#4.5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    text: "A compact aluminium zipper option for applications requiring a refined profile and metallic finish.",
    images: [
      `${P}/alumuniumzippers/aluminium-4-5.webp`,
      `${P}/alumuniumzippers/alumuniumzipper2.webp`,
    ],
  },
  {
    id: "nylon",
    code: "N·01",
    size: null,
    name: "Nylon Zippers",
    family: "synthetic",
    familyLabel: "Nylon",
    text: "Flexible and versatile zipper solutions for a wide range of apparel and accessory applications.",
    images: [
      `${P}/nylonzippers/Zip003-edited.webp`,
      `${P}/nylonzippers/2.webp`,
      `${P}/nylonzippers/reversible nylon zipper.webp`,
      `${P}/nylonzippers/waterproofnylonzipper.webp`,
      `${P}/nylonzippers/5.webp`,
    ],
  },
  {
    id: "vislon",
    code: "V·01",
    size: null,
    name: "Vislon Zippers",
    family: "synthetic",
    familyLabel: "Vislon",
    text: "Moulded-tooth zipper solutions suitable for casualwear, sportswear, outerwear, and other functional applications.",
    images: [
      `${P}/vislonzipper/vislon3.png`,
      `${P}/vislonzipper/vislon7.png`,
      `${P}/vislonzipper/vislon0.png`,
      `${P}/vislonzipper/vislon4.png`,
      `${P}/vislonzipper/vislon6.png`,
      `${P}/vislonzipper/vislon9.png`,
    ],
  },
  {
    id: "tag-strings",
    code: "T·01",
    size: null,
    name: "Tag Strings",
    family: "accessories",
    familyLabel: "Accessory",
    text: "Practical attachment solutions for garment tags, hangtags, labels, and product identification.",
    images: [],
    monogram: "Ts",
  },
  {
    id: "tipping",
    code: "T·02",
    size: null,
    name: "Tipping & TPU Tippings",
    family: "accessories",
    familyLabel: "Accessory",
    text: "Finishing components for suitable cords and drawstrings, designed for a neat and refined end finish.",
    images: [],
    monogram: "Tp",
  },
];

const M = "/manufacturing";

export const PROCESS = [
  {
    no: "01",
    title: "Tape Making",
    text: "Production of zipper tape forming the foundation of the finished zipper.",
    image: `${M}/7.webp`,
  },
  {
    no: "02",
    title: "Teeth Manufacturing",
    text: "Manufacturing and forming zipper teeth according to the required type and size.",
    image: `${M}/9.webp`,
  },
  {
    no: "03",
    title: "Plating",
    text: "Application of selected surface finishes to applicable metal zipper components.",
    image: `${M}/13.webp`,
  },
  {
    no: "04",
    title: "Lacquering",
    text: "Controlled surface treatment for the required appearance and finish on applicable products.",
    image: `${M}/14.webp`,
  },
  {
    no: "05",
    title: "Waxing",
    text: "Wax treatment for applicable constructions to support smooth zipper operation.",
    image: `${M}/5.webp`,
  },
  {
    no: "06",
    title: "Assembly",
    text: "Modern assembling machinery brings tape, teeth, and components together into complete zippers.",
    image: `${M}/production.webp`,
  },
  {
    no: "07",
    title: "Finishing & Quality Inspection",
    text: "Checking construction, appearance, finishing, operation, and conformity with agreed requirements.",
    image: "/quality/slider-check.webp",
  },
  {
    no: "08",
    title: "Packing & Delivery",
    text: "Completed products are prepared, packed, and organized for delivery according to customer requirements.",
    image: "/packaging/box-stack.webp",
  },
];

export const TECHNOLOGY = {
  heading: "Modern Machinery. Controlled Manufacturing.",
  body: [
    "AF7 is equipped with modern machinery imported from China, including advanced automated zipper assembling equipment. Our production setup supports efficient manufacturing while maintaining close control over key production stages.",
    "By combining modern technology with controlled processes and skilled manufacturing, we work to achieve consistent products and dependable production results.",
  ],
  gallery: [
    { src: `${M}/factory.webp`, caption: "Production floor" },
    { src: `${M}/11.webp`, caption: "Automated assembly" },
    { src: `${M}/6.webp`, caption: "Imported machinery" },
    { src: `${M}/machinery.webp`, caption: "Tape weaving" },
    { src: "/quality/zipper-check.webp", caption: "Machine operation" },
    { src: `${M}/14.webp`, caption: "Integrated production" },
  ],
};

// Gradients approximate each finish as a metal sample, for orientation only.
export const FINISHES = [
  { name: "Antique Silver", tone: "Aged · Cool", g: ["#5f6267", "#c4c7cb", "#8a8d92", "#4c4f54"] },
  { name: "Antique Brass", tone: "Aged · Warm", g: ["#4b3a1e", "#a8874c", "#7a6234", "#3a2c15"] },
  { name: "Golden Brass", tone: "Bright · Warm", g: ["#8a6a25", "#ecd18b", "#b8913f", "#76561a"] },
  { name: "Shiny Silver", tone: "Bright · Cool", g: ["#9aa1a8", "#ffffff", "#cfd4d9", "#8b9299"] },
  { name: "Antique Copper", tone: "Aged · Red", g: ["#3f2216", "#b06d43", "#7a4329", "#331a10"] },
  { name: "Dull / Matt Silver", tone: "Matt · Neutral", g: ["#8f9398", "#bfc2c6", "#a6a9ad", "#878b90"] },
  { name: "Gun Metal", tone: "Dark · Cool", g: ["#1e2124", "#6a7077", "#3b3f44", "#17191c"] },
  { name: "Shiny Black", tone: "Gloss · Deep", g: ["#050506", "#55585d", "#141518", "#020203"] },
  { name: "Shiny Gold", tone: "Gloss · Warm", g: ["#9c7314", "#fde6a0", "#cf9f33", "#8a6410"] },
  { name: "Shiny Nickel", tone: "Gloss · Neutral", g: ["#868b90", "#f4f5f6", "#b9bdc1", "#7a7f84"] },
];

export const QUALITY = {
  heading: "Quality in Every Stage",
  intro:
    "At AF7, quality is considered throughout the manufacturing process. Our quality focus includes:",
  points: [
    "Product construction and teeth alignment",
    "Zipper assembly and operation",
    "Surface appearance and finishing",
    "Product consistency",
    "Compliance with agreed specifications",
    "Final inspection and packing",
  ],
  objective:
    "To deliver products that combine reliable functionality with consistent appearance and finishing.",
};

export const CUSTOMIZATION = {
  heading: "Built Around Your Requirements",
  intro:
    "Every garment has different design and fastening requirements. AF7 works with customers to identify suitable zipper types, sizes, materials, finishes, colours, and specifications according to the intended application.",
  items: [
    "Zipper type and size",
    "Metal or aluminium construction",
    "Nylon and Vislon options",
    "Tape colour and specifications",
    "Applicable finishes",
    "Product configuration",
    "Packing and order requirements",
  ],
  closing: "Your requirements. Our manufacturing expertise.",
};

export const APPLICATIONS = {
  heading: "Designed for Modern Apparel",
  intro:
    "AF7 zipper solutions can be used across a broad range of garment and fashion applications, including:",
  items: [
    "Apparel & Fashion",
    "Denim & Jeans",
    "Jackets & Outerwear",
    "Casualwear",
    "Sportswear",
    "Bags & Accessories",
    "Footwear",
    "Garment Tags & Drawstrings",
  ],
  closing:
    "The appropriate zipper construction is selected according to the design, material, function, and requirements of the finished product.",
};

export const WHY = {
  heading: "One Manufacturing Partner. Multiple Solutions.",
  items: [
    {
      title: "Integrated Production",
      text: "Key manufacturing stages are managed in-house, providing greater production control.",
    },
    {
      title: "Modern Technology",
      text: "Advanced machinery imported from China supports manufacturing and automated assembly.",
    },
    {
      title: "Diverse Product Range",
      text: "Metal, aluminium, nylon, and Vislon zippers, supported by tag strings and tipping solutions.",
    },
    {
      title: "Controlled Finishing",
      text: "Applicable plating, lacquering, and waxing processes are integrated into production.",
    },
    {
      title: "Quality Focus",
      text: "Attention to construction, finishing, functionality, and agreed product specifications.",
    },
    {
      title: "Customer-Focused Manufacturing",
      text: "We work closely with customers to understand requirements and deliver suitable solutions.",
    },
  ],
};

export const PURPOSE = {
  vision:
    "To establish AF7 as a trusted and internationally competitive zipper manufacturing brand, recognized for precision, consistent quality, modern technology, and dependable customer partnerships.",
  mission:
    "To manufacture and deliver reliable zipper and garment accessory solutions through modern technology, integrated production, controlled processes, and continuous attention to customer requirements.",
  commitment: [
    "At AF7, we believe that excellence is created through the details.",
    "Every tape, tooth, finish, assembly, and final inspection contributes to the quality of the finished product. We continuously focus on improving our manufacturing processes, maintaining product consistency, and delivering solutions that meet customer expectations.",
  ],
};

export const CONTACT = {
  heading: "Let’s Create the Right Connection.",
  intro:
    "For product enquiries, samples, specifications, customization, or manufacturing requirements, contact the AF7 team.",
};
