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
    "Built around a focused zipper manufacturing operation in Lahore, AF7 brings together production expertise, modern equipment, and a commitment to consistent workmanship. Our factory is equipped with state-of-the-art automated zipper assembly lines and supports a range of in-house processes that help us maintain direct oversight of product construction and finishing.",
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
      `${P}/photos2/metal5-cream-antique-brass.webp`,
      `${P}/photos2/metal5-black-golden-brass-separating.webp`,
      `${P}/photos2/metal5-black-antique-brass-separating.webp`,
      `${P}/photos2/metal5-olive-nickel-separating.webp`,
      `${P}/photos2/metal5-black-antique-silver-separating.webp`,
      `${P}/photos2/metal5-brown-antique-brass-separating.webp`,
      `${P}/photos2/metal5-black-antique-brass-separating-2.webp`,
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
      `${P}/photos2/metal45-black-golden-brass.webp`,
      `${P}/photos2/metal45-black-antique-copper.webp`,
      `${P}/photos2/metal45-black-antique-brass-2.webp`,
      `${P}/photos2/metal45-black-antique-brass.webp`,
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
      `${P}/photos2/alu5-black-silver-separating-2.webp`,
      `${P}/photos2/alu5-navy-silver-separating.webp`,
      `${P}/photos2/alu5-black-silver-separating.webp`,
      `${P}/photos2/alu5-black-silver-separating-3.webp`,
      `${P}/photos2/alu5-navy-silver-separating-2.webp`,
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
      `${P}/photos2/alu45-black-light-gold.webp`,
      `${P}/photos2/alu45-white-silver.webp`,
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
      `${P}/2wayzippers2/black.webp`,
      `${P}/2wayzippers2/black2.webp`,
      `${P}/2wayzippers2/burgandry.webp`,
      `${P}/2wayzippers2/grey.webp`,
      `${P}/2wayzippers2/navy.webp`,
      `${P}/2wayzippers2/nvy.webp`,
      `${P}/2wayzippers2/white.webp`,
      `${P}/2wayzippers2/white%20tsape.webp`,
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
      `${P}/photos2/nylon-black-silver-slider.webp`,
      `${P}/photos2/nylon-black-invisible.webp`,
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
      `${P}/vislonzipper2/3.webp`,
      `${P}/vislonzipper2/2.webp`,
      `${P}/vislonzipper2/4.webp`,
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
      `${P}/photos2/tagstring-black-1.webp`,
      `${P}/photos2/tagstring-white-1.webp`,
      `${P}/photos2/tagstring-black-2.webp`,
      `${P}/photos2/tagstring-white-2.webp`,
      `${P}/photos2/tagstring-black-3.webp`,
      `${P}/photos2/tagstring-white-3.webp`,
      `${P}/photos2/tagstring-white-4.webp`,
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
      `${P}/photos2/tipping-black-1.webp`,
      `${P}/photos2/tipping-white-1.webp`,
      `${P}/photos2/tipping-black-2.webp`,
      `${P}/photos2/tipping-white-2.webp`,
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
    image: "/factory/tape-weaving.webp",
  },
  {
    no: "02",
    title: "Teeth Manufacturing",
    text: "Forming metal or aluminium teeth for applicable zipper types and sizes.",
    image: "/factory/forming-machine.webp",
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
    image: `${M}/lacquering.webp`,
  },
  {
    no: "05",
    title: "Waxing",
    text: "Applying wax treatment where required to support smooth zipper movement.",
    image: "/factory/brass-sliders.webp",
  },
  {
    no: "06",
    title: "Assembly",
    text: "Using state-of-the-art automated zipper assembly lines to bring the relevant components together.",
    image: "/factory/chain-assembly.webp",
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
    { src: "/factory/production-line.webp", caption: "Production floor" },
    { src: "/factory/chain-guide.webp", caption: "Automated assembly" },
    { src: "/factory/production-machinery.webp", caption: "Automated machinery" },
    { src: "/factory/tape-looms.webp", caption: "Tape weaving" },
    { src: "/quality/zipper-check.webp", caption: "Machine operation" },
    { src: `${M}/production.webp`, caption: "Assembly operation" },
    { src: "/factory/chain-machine.webp", caption: "Precision tooling" },
    { src: "/factory/assembly-machines.webp", caption: "Integrated production" },
  ],
};

// Same ten finishes, swatches and slugs as the AF7 website (af7 repo, data/company.js).
// Each slug has a matching metal layer in /public/finishes/zipper-v3/metal-<slug>.webp.
// Order follows the Brand Profile document.
export const FINISHES = [
  { name: "Antique Silver", swatch: "linear-gradient(135deg, #8d9094, #c9cbcd 45%, #6e7175)", slug: "antique-silver" },
  { name: "Antique Brass", swatch: "linear-gradient(135deg, #6f5a35, #b39663 45%, #5a4727)", slug: "antique-brass" },
  { name: "Golden Brass", swatch: "linear-gradient(135deg, #b8913f, #f1d58b 45%, #a17a2c)", slug: "golden-brass" },
  { name: "Shiny Silver", swatch: "linear-gradient(135deg, #c7cbd0, #ffffff 45%, #a9aeb4)", slug: "shiny-silver" },
  { name: "Antique Copper", swatch: "linear-gradient(135deg, #6b3f26, #b57650 45%, #573020)", slug: "antique-copper" },
  { name: "Dull / Matt Silver", swatch: "linear-gradient(135deg, #a3a6a9, #bfc1c3 50%, #9a9da0)", slug: "matt-silver" },
  { name: "Shiny Black", swatch: "linear-gradient(135deg, #0d0e10, #4a4d52 45%, #050506)", slug: "shiny-black" },
  { name: "Shiny Nickel", swatch: "linear-gradient(135deg, #a9adb1, #eef0f2 45%, #8e9296)", slug: "shiny-nickel" },
  { name: "Shiny Gold", swatch: "linear-gradient(135deg, #c99a2e, #ffe28a 45%, #b0811d)", slug: "shiny-gold" },
  { name: "Gun Metal", swatch: "linear-gradient(135deg, #2f3236, #6a6e74 45%, #232528)", slug: "gun-metal" },
];

// Tape colours in the finish preview; each has /public/finishes/zipper-v3/tape-<slug>.webp.
export const TAPES = [
  { name: "Black", color: "#1c1c1e", slug: "black" },
  { name: "Navy", color: "#1f2b47", slug: "navy" },
  { name: "Burgundy", color: "#6b1d2c", slug: "burgundy" },
  { name: "Red", color: "#b0262f", slug: "red" },
  { name: "Forest Green", color: "#2e4a38", slug: "forest-green" },
  { name: "Olive", color: "#4d5130", slug: "olive" },
  { name: "Brown", color: "#4a3427", slug: "brown" },
  { name: "Grey", color: "#85888c", slug: "grey" },
];

export const FINISHES_COPY = {
  intro:
    "A quality finish defines both the zipper’s durability and the garment’s aesthetic. For applicable metal zipper constructions, AF7 delivers superior in-house finishing, including precision plating, protective lacquering, and specialized waxing. Exact finish availability is tailored to your material and project specifications.",
  note: "Metal zipper finishes are subject to confirmation for the selected product.",
  enquiry:
    "Product enquiries may include zipper size, material, tape colour, finish, construction, quantity, and intended application. Specific options should be confirmed with AF7 before a product specification is finalized.",
};

export const QUALITY = {
  heading: "Quality Is Built Into Every Stage.",
  intro: "Ongoing inspection across all 8 in-house manufacturing stages to match buyer specifications.",
  points: [
    { title: "The Architecture", tag: "Chain & Alignment", text: "Uniform pitch and seamless teeth interlocking." },
    { title: "The Finish", tag: "Surface & Colorway", text: "Consistent and custom matched plating, lacquer, and tape shade." },
    { title: "The Glide", tag: "Function & Motion", text: "Effortless waxed pull and secure auto-lock hardware engineered for daily wear." },
    { title: "The Fit", tag: "Spec & Trim Audit", text: "Exact gauge, premium alloy, and strict adherence to your approved tech pack and samples." },
    { title: "The Showcase", tag: "Dispatch & Packaging", text: "Custom labeled LLD polybags and crush-proof export boxes." },
  ],
  line: {
    label: "The Atelier Line",
    steps: ["Tape Weaving", "Teeth Forming", "Plating", "Lacquering", "Waxing", "Assembly", "QC", "Packing"],
  },
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
  body: [
    "Completed products are organized and packed according to the applicable product and order requirements. Packaging and identification arrangements can be discussed during order confirmation.",
    "AF7 aims to support clear order coordination, careful preparation, and dependable dispatch planning.",
  ],
  // Mockups updated to the packaging design in the AF7 Visual Identity Guidelines, section 06.
  images: [
    { src: "/packaging/box-stack.webp", caption: "Corrugated cartons" },
    { src: "/packaging/corrugated-box.webp", caption: "Carton with packing sticker" },
    { src: "/packaging/lld-bag.webp", caption: "LLD polybags with product sticker" },
  ],
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
