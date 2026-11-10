// All copy is taken from the AF7 Brand Profile document.

export const COMPANY = {
  name: "AF7",
  tagline: "Precision in Every Detail.",
  descriptor: "Zipper Manufacturing & Garment Accessories",
  city: "Lahore, Pakistan",
  address: "33B, Punjab Small Industries Corporation, Sunder II, Lahore, Pakistan",
  phone: "+92 313 4710325",
  phoneHref: "tel:+923134710325",
  whatsapp: "https://wa.me/923134710325",
  hours: "9:00 AM to 6:00 PM (PKT)",
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
  statement:
    "AF7 is a zipper manufacturing brand based in Lahore, Pakistan, focused on producing metal, aluminium, nylon, and Vislon zippers, alongside selected garment accessories including tag strings and tipping.",
  body: [
    "Supported by state-of-the-art automated zipper assembly lines and integrated in-house production capabilities, AF7 manages key stages of zipper manufacturing, from tape production and teeth formation to finishing, assembly, inspection, and preparation of finished products for delivery.",
    "Our approach combines manufacturing discipline, attention to detail, and a practical understanding of the requirements of garment manufacturers, fashion brands, and accessory businesses. We aim to provide dependable fastening solutions with product specifications and finishes suited to each application.",
    "From metal and aluminium zipper production to nylon and Vislon zipper offerings, our product range is designed to address varied garment and accessory applications. We also manufacture and supply selected complementary items such as tag strings and tipping, helping customers source relevant fastening and finishing components through one manufacturing partner.",
    "We understand that a zipper contributes to the function, appearance, and overall quality of a finished product. That is why we focus on the details that matter: suitable construction, consistent finishing, smooth operation, specification alignment, and careful order preparation.",
  ],
  philosophy: "Precision in Every Detail.",
  philosophyText:
    "At AF7, precision is not just a slogan. It is the standard that guides our manufacturing process, product finishing, and customer relationships.",
};

const P = "/products";

export const PRODUCTS_INTRO =
  "AF7 offers a focused range of zippers and garment accessories for apparel manufacturers, fashion labels, and related industries. Availability, specifications, finishes, and customization options depend on the product type and order requirements.";

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
    text: "For garment and accessory applications where metal teeth contribute to the product’s appearance and fastening function. Attention is given to tooth formation, chain construction, finishing, and the intended application.",
    images: [
      `${P}/brasszippers5/1.webp`,
      `${P}/brasszippers5/2.webp`,
      `${P}/brasszippers5/3.webp`,
      `${P}/brasszippers5/4.webp`,
      `${P}/brasszippers5/5.webp`,
      `${P}/brasszippers5/6.webp`,
      `${P}/brasszippers5/7.webp`,
      `${P}/brasszippers5/8.webp`,
      `${P}/brasszippers5/9.webp`,
      `${P}/brasszippers5/10.webp`,
      `${P}/brasszippers5/alumunium.webp`,
      `${P}/brasszippers5/IMG_2071.webp`,
      `${P}/brasszippers5/IMG_2074.webp`,
      `${P}/brasszippers5/IMG_2077.webp`,
    ],
  },
  {
    id: "metal-45",
    code: "M·4.5",
    size: "#4.5",
    name: "Metal Zippers",
    family: "metal",
    familyLabel: "Metal",
    text: "A compact metal zipper for garment and accessory applications, with attention to tooth formation, chain construction, finishing, and the intended application.",
    images: [
      `${P}/brasszippers4.5/1.webp`,
      `${P}/brasszippers4.5/2.webp`,
      `${P}/brasszippers4.5/3.webp`,
      `${P}/brasszippers4.5/4.webp`,
    ],
  },
  {
    id: "aluminium-5",
    code: "A·05",
    size: "#5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    text: "An aluminium-based fastening option for designs requiring a distinctive metallic look and functional performance. Construction and finishing are considered according to the customer’s product requirements.",
    images: [
      `${P}/alumuniumzipper5/1.webp`,
      `${P}/alumuniumzipper5/2.webp`,
      `${P}/alumuniumzipper5/3.webp`,
      `${P}/alumuniumzipper5/4.webp`,
    ],
  },
  {
    id: "aluminium-45",
    code: "A·4.5",
    size: "#4.5",
    name: "Aluminium Zippers",
    family: "aluminium",
    familyLabel: "Aluminium",
    text: "A compact aluminium-based fastening option for designs requiring a distinctive metallic look and functional performance, with construction and finishing suited to the product requirements.",
    images: [
      `${P}/alumuniumzippers4.5/1.webp`,
      `${P}/alumuniumzippers4.5/2.webp`,
      `${P}/alumuniumzippers4.5/3.webp`,
      `${P}/alumuniumzippers4.5/4.webp`,
      `${P}/alumuniumzippers4.5/images.webp`,
    ],
  },
  {
    id: "two-way",
    code: "2W·01",
    size: null,
    name: "Two-Way Zippers",
    family: "synthetic",
    familyLabel: "Two-Way",
    text: "Versatile two-way zipper solutions for garments and applications requiring opening from both ends.",
    images: [
      `${P}/2wayzippers/black.webp`,
      `${P}/2wayzippers/black2.webp`,
      `${P}/2wayzippers/burgandry.webp`,
      `${P}/2wayzippers/grey.webp`,
      `${P}/2wayzippers/navy.webp`,
      `${P}/2wayzippers/nvy.webp`,
      `${P}/2wayzippers/white.webp`,
      `${P}/2wayzippers/white%20tsape.webp`,
    ],
  },
  {
    id: "nylon",
    code: "N·01",
    size: null,
    name: "Nylon Zippers",
    family: "synthetic",
    familyLabel: "Nylon",
    text: "A flexible and versatile fastening option for a wide variety of garments and accessories. Product selection can be discussed according to the intended application, zipper size, tape requirements, colour, and functional needs.",
    images: [
      `${P}/nylonzippers/1.webp`,
      `${P}/nylonzippers/2.webp`,
      `${P}/nylonzippers/3.webp`,
      `${P}/nylonzippers/4.webp`,
      `${P}/nylonzippers/5.webp`,
      `${P}/nylonzippers/6.webp`,
    ],
  },
  {
    id: "vislon",
    code: "V·01",
    size: null,
    name: "Vislon Zippers",
    family: "synthetic",
    familyLabel: "Vislon",
    text: "Vislon-style zippers feature moulded plastic teeth and are used across a range of apparel and accessory applications. AF7 can discuss suitable options based on the desired appearance, construction, size, and end use.",
    images: [
      `${P}/vislonzipper/1.webp`,
      `${P}/vislonzipper/2.webp`,
      `${P}/vislonzipper/3.webp`,
      `${P}/vislonzipper/4.webp`,
    ],
  },
  {
    id: "tag-strings",
    code: "T·01",
    size: null,
    name: "Tag Strings",
    family: "accessories",
    familyLabel: "Accessory",
    text: "A practical attachment solution for hangtags, labels, and retail identification on garments and accessories. Specifications and presentation can be discussed according to the customer’s product and branding requirements.",
    images: [
      `${P}/tagstring/1.webp`,
      `${P}/tagstring/2.webp`,
    ],
    monogram: "Ts",
  },
  {
    id: "tipping",
    code: "T·02",
    size: null,
    name: "Tipping & TPU Tippings",
    family: "accessories",
    familyLabel: "Accessory",
    text: "Tipping finishes the ends of suitable cords and drawstrings for a neat, complete appearance. TPU tippings offer a thermoplastic polyurethane option for compatible cords, delivering a clean end finish. Material, shape, size, and colour options are confirmed against the required application.",
    images: [
      `${P}/tipping/1.webp`,
      `${P}/tipping/2.webp`,
    ],
    monogram: "Tp",
  },
];

const M = "/manufacturing";

export const PROCESS_INTRO =
  "AF7’s Lahore factory brings key manufacturing stages together under one roof. Our integrated production approach supports process coordination and direct oversight from component preparation to finished zipper assembly.";

export const PROCESS = [
  {
    no: "01",
    title: "Tape Making",
    text: "Producing zipper tape as the foundation of the zipper construction.",
    image: `${M}/7.webp`,
  },
  {
    no: "02",
    title: "Teeth Manufacturing",
    text: "Forming metal or aluminium teeth for applicable zipper types and sizes.",
    image: `${M}/assembly-machine.webp`,
  },
  {
    no: "03",
    title: "Plating",
    text: "Applying relevant plating finishes to compatible metal components.",
    image: `${M}/plating-line.webp`,
  },
  {
    no: "04",
    title: "Lacquering",
    text: "Applying appropriate lacquer treatments to support the specified appearance and surface finish.",
    image: `${M}/IMG_2105 (1).JPG.jpeg`,
  },
  {
    no: "05",
    title: "Waxing",
    text: "Applying wax treatment where required to support smooth zipper movement.",
    image: `${M}/IMG_2105 (1).JPG.jpeg`,
  },
  {
    no: "06",
    title: "Assembly",
    text: "Using state-of-the-art automated zipper assembly lines to bring the relevant components together.",
    image: `${M}/IMG_1869.JPG.jpeg`,
  },
  {
    no: "07",
    title: "Finishing & Inspection",
    text: "Checking completed products for relevant construction, appearance, operation, and conformity to agreed specifications.",
    image: "/quality/slider-check.webp",
  },
  {
    no: "08",
    title: "Packing & Dispatch Preparation",
    text: "Organizing finished orders and preparing them for delivery in accordance with customer requirements.",
    image: "/packaging/AF7_Carton_Mockup_Detail_Logo.webp",
  },
];

export const TECHNOLOGY = {
  heading: "Modern Equipment. Greater Production Control.",
  body: [
    "AF7’s factory operates with state-of-the-art automated zipper assembly lines and modern manufacturing technology. This advanced setup ensures a seamless, synchronized workflow across all production stages, giving us absolute quality control from raw tape to final dispatch.",
    "We believe that effective manufacturing combines the right equipment with process discipline, skilled handling, and clear product specifications. Our focus is on practical production efficiency, consistent workmanship, and reliable preparation of finished orders.",
  ],
  gallery: [
    { src: `${M}/factory.webp`, caption: "Production floor" },
    { src: `${M}/11.webp`, caption: "Automated assembly" },
    { src: `${M}/6.webp`, caption: "Automated machinery" },
    { src: `${M}/machinery.webp`, caption: "Tape weaving" },
    { src: "/quality/zipper-check.webp", caption: "Machine operation" },
    { src: `${M}/production.webp`, caption: "Assembly operation" },
    { src: `${M}/9.webp`, caption: "Precision tooling" },
    { src: `${M}/14.webp`, caption: "Integrated production" },
  ],
};

// Gradients approximate each finish as a metal sample, for orientation only.
// Order follows the Brand Profile document.
export const FINISHES = [
  { name: "Antique Silver", tone: "Aged · Cool", g: ["#5f6267", "#c4c7cb", "#8a8d92", "#4c4f54"] },
  { name: "Antique Brass", tone: "Aged · Warm", g: ["#4b3a1e", "#a8874c", "#7a6234", "#3a2c15"] },
  { name: "Golden Brass", tone: "Bright · Warm", g: ["#8a6a25", "#ecd18b", "#b8913f", "#76561a"] },
  { name: "Shiny Silver", tone: "Bright · Cool", g: ["#9aa1a8", "#ffffff", "#cfd4d9", "#8b9299"] },
  { name: "Antique Copper", tone: "Aged · Red", g: ["#3f2216", "#b06d43", "#7a4329", "#331a10"] },
  { name: "Dull / Matt Silver", tone: "Matt · Neutral", g: ["#8f9398", "#bfc2c6", "#a6a9ad", "#878b90"] },
  { name: "Shiny Black", tone: "Gloss · Deep", g: ["#050506", "#55585d", "#141518", "#020203"] },
  { name: "Shiny Nickel", tone: "Gloss · Neutral", g: ["#868b90", "#f4f5f6", "#b9bdc1", "#7a7f84"] },
  { name: "Shiny Gold", tone: "Gloss · Warm", g: ["#9c7314", "#fde6a0", "#cf9f33", "#8a6410"] },
  { name: "Gun Metal", tone: "Dark · Cool", g: ["#1e2124", "#6a7077", "#3b3f44", "#17191c"] },
];

export const FINISHES_COPY = {
  intro:
    "A quality finish defines both the zipper’s durability and the garment’s aesthetic. For applicable metal zipper constructions, AF7 delivers superior in-house finishing, including precision plating, protective lacquering, and specialized waxing. Exact finish availability is tailored to your material and project specifications.",
  note:
    "Product enquiries may include zipper size, material, tape colour, finish, construction, quantity, and intended application. Specific options should be confirmed with AF7 before a product specification is finalized.",
};

export const QUALITY = {
  heading: "Quality Is Built Into Every Stage",
  intro:
    "AF7 approaches quality as an ongoing responsibility throughout manufacturing. Inspection is focused on the characteristics relevant to each product and the specifications agreed with the customer.",
  points: [
    { title: "Construction and alignment", text: "Reviewing relevant zipper chain construction, teeth alignment, and assembly." },
    { title: "Appearance and finishing", text: "Checking the applicable surface finish, colour, coating, and visible consistency." },
    { title: "Operation", text: "Checking zipper movement and fastening function where applicable." },
    { title: "Specification conformity", text: "Reviewing the product against agreed size, material, finish, and order details." },
    { title: "Packing preparation", text: "Ensuring finished orders are organized and prepared for dispatch." },
  ],
};

export const CUSTOMIZATION = {
  heading: "Customization & Product Development",
  intro:
    "Different garments and accessories require different fastening solutions. AF7 welcomes discussions about product requirements and suitable zipper specifications, subject to the product type and manufacturing capabilities.",
  items: [
    "Zipper type and size: metal, aluminium, nylon, or Vislon-style",
    "Applicable finish and colour requirements",
    "Tape specifications and colour matching, subject to availability",
    "Product configuration and intended end use",
    "Order identification and packing requirements",
  ],
};

export const APPLICATIONS = {
  heading: "Applications",
  intro:
    "AF7 zipper and accessory products can be considered for a variety of applications, depending on the selected product and its specifications:",
  items: [
    "Apparel & Fashion Garments",
    "Denim & Jeans",
    "Jackets & Outerwear",
    "Casualwear & Selected Sportswear",
    "Bags & Compatible Accessories",
    "Footwear & Other Suitable Products",
    "Hangtags, Labels, Cords & Drawstring Finishing",
  ],
};

export const WHY = {
  heading: "Why AF7",
  items: [
    { title: "Integrated In-House Capabilities", text: "Key stages of zipper manufacturing are managed within our Lahore facility." },
    { title: "Advanced Automated Machinery", text: "State-of-the-art equipment supports high-speed, precision production and seamless automated assembly." },
    { title: "Broad Product Offering", text: "Metal, aluminium, nylon, and Vislon zippers, plus tag strings and tipping." },
    { title: "Finishing Capabilities", text: "In-house plating, lacquering, and waxing for applicable products." },
    { title: "Attention to Detail", text: "Focus on construction, finish, function, and agreed specifications." },
    { title: "Customer-Focused Coordination", text: "Product discussions based on intended use and order requirements." },
    { title: "End-to-End Production Flow", text: "Coordination from applicable manufacturing stages through finished product preparation and delivery." },
  ],
};

export const PACKAGING = {
  heading: "Packaging & Delivery",
  intro:
    "Completed products are organized and packed according to the applicable product and order requirements. Packaging and identification arrangements can be discussed during order confirmation.",
  closing:
    "AF7 aims to support clear order coordination, careful preparation, and dependable dispatch planning.",
  // Packaging artwork from the AF7 Visual Identity Guidelines, section 06.
  carton: {
    image: "/packaging/carton-navy.webp",
    title: "Built to protect. Made to be recognised.",
    text: "A shipping carton with the logo on both long sides and the monogram on each end. The carton sticker always sits on an end panel, centred, so it can be read when cartons are stacked.",
    specs: [
      ["Size (L × W × D)", "15 × 10 × 6 in"],
      ["Style", "Regular slotted carton"],
      ["Print", "1 colour, AF7 Navy"],
      ["Sticker", "6 × 4 in, end panel"],
    ],
  },
  boards: {
    title: "Three boards. One identity.",
    text: "The same 15 × 10 × 6 in carton and die line in three board options. Natural kraft is the everyday standard; white and navy are for premium and presentation shipments.",
    items: [
      {
        name: "Natural Kraft",
        tag: "Standard",
        image: "/packaging/carton-kraft.webp",
        swatch: "#c49a68",
        specs: [["Board", "Brown kraft, unbleached"], ["Print", "AF7 Navy, 1 colour flexo"], ["Use", "Everyday shipping and bulk orders"]],
      },
      {
        name: "White Board",
        image: "/packaging/carton-white.webp",
        swatch: "#f3f3f0",
        specs: [["Board", "White top corrugated"], ["Print", "AF7 Navy, 1 colour flexo"], ["Use", "Sample kits and brand orders"]],
      },
      {
        name: "Navy Flood",
        image: "/packaging/carton-navy-flood.webp",
        swatch: "#243146",
        specs: [["Board", "White top, full navy print"], ["Print", "Navy flood, logo knocked out"], ["Use", "Premium and presentation"]],
      },
    ],
  },
  details: [
    {
      label: "Carton sticker",
      title: "Clear information, every carton.",
      text: "The sticker identifies every outgoing carton. A black header carries the logo and line, and four write on fields hold the order details.",
      image: "/packaging/carton-sticker.webp",
      specs: [["Size", "6 × 4 in, landscape"], ["Stock", "White self adhesive paper"], ["Fields", "Handwritten or thermal print"], ["Placement", "Centred on end panel"]],
    },
    {
      label: "LLD polybag",
      title: "Clean, clear and protective.",
      text: "A transparent self seal bag. The logo is printed in navy on the front, and a product sticker identifies the contents. The product stays visible through the film.",
      image: "/packaging/polybag.webp",
      specs: [["Size", "6.5 × 11.5 in"], ["Lip flap", "1.5 in, adhesive"], ["Material", "LLDPE, clear"], ["Print", "1 colour, AF7 Navy"]],
    },
  ],
  productSticker: {
    image: "/packaging/product-sticker.webp",
    caption: "Product sticker: 3 × 2 in, white self adhesive, black and white",
  },
  dieline: {
    image: "/packaging/carton-dieline.webp",
    caption: "Corrugated carton die line: 15 × 10 × 6 in regular slotted carton. Long sides carry the logo; end panels carry the full logo and the carton sticker.",
  },
};

export const PURPOSE = {
  vision:
    "To establish AF7 as a trusted and internationally competitive zipper brand, recognized for manufacturing capability, dependable product quality, modern production technology, and long-term customer partnerships.",
  mission:
    "To deliver reliable zipper and garment accessory solutions through integrated manufacturing processes, appropriate technology, careful inspection, and a customer-focused approach to product requirements.",
  values: [
    { title: "Precision", text: "Careful attention to product construction, dimensions, finishing, and detail." },
    { title: "Quality", text: "Consistent workmanship and inspection against agreed requirements." },
    { title: "Innovation", text: "Continued use of modern machinery and effective production methods." },
    { title: "Reliability", text: "A disciplined approach to order coordination, product specifications, and dispatch." },
    { title: "Partnership", text: "Responsive communication and a clear understanding of customer needs." },
    { title: "Continuous Improvement", text: "Reviewing processes and looking for practical ways to improve consistency and efficiency." },
  ],
  philosophy: {
    heading: "Precision Is More Than a Promise.",
    text: "At AF7, precision is reflected in the way components are manufactured, processes are coordinated, finishes are applied, and completed products are checked. We believe dependable products are built through appropriate technology, careful workmanship, clear specifications, and attention to the customer’s intended application.",
  },
};

export const CONTACT = {
  heading: "Let’s Create the Right Connection.",
  intro:
    "For product enquiries, samples, specifications, customization, or manufacturing requirements, contact the AF7 team.",
};
