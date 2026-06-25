// ── DK Laundry & Dry Cleaners — real business data ──────────────────────────
// Source: owner's business cards & flyers. Update here when details change.

export const BUSINESS = {
  name: "DK Laundry",
  fullName: "DK Laundry & Dry Cleaners",
  nameHindi: "डी के लॉन्ड्री",
  since: 1985,
  tagline: "Where Cleanliness Meets Care",
  manager: "Pankaj Dhobi",
  website: "https://dk-laundry.netlify.app",
};

export const CONTACT = {
  phones: [
    { display: "+91 85911 17417", dial: "+918591117417", whatsapp: "918591117417" },
    { display: "+91 77384 17417", dial: "+917738417417" },
    { display: "+91 91374 03932", dial: "+919137403932" },
  ],
  whatsapp: "918591117417",
  email: "dklaundrycare@gmail.com", // confirm with owner
  address: {
    line1: "Shop No.1, Shivner, Bhardawadi",
    line2: "J.P. Road, Opposite BMC Office",
    area: "Andheri West, Mumbai 400058",
  },
  mapQuery: "DK Laundry, Bhardawadi, J.P. Road, Andheri West, Mumbai 400058",
  hours: [
    { day: "Mon – Sat", time: "8:00 AM – 9:00 PM" },
    { day: "Sunday", time: "9:00 AM – 6:00 PM" },
  ],
};

export const HIGHLIGHTS = [
  "Free Pickup & Delivery",
  "Same Day Service",
  "Professional Care",
  "Since 1985",
];

export const CATEGORIES = ["All", "Everyday", "Premium", "Specialty"];

// One source of truth: services power the listing, detail pages and pricing.
export const SERVICES = [
  {
    id: "normal-wash",
    name: "Normal Wash",
    icon: "drop",
    category: "Everyday",
    price: 50,
    unit: "per item",
    prefix: "",
    popular: false,
    short: "Everyday machine wash for regular clothes, gently cleaned and dried.",
    long:
      "Our standard wash uses skin-friendly detergents and a gentle cycle to keep colours bright and fabrics soft. Ideal for daily wear, t-shirts, jeans and casual clothing.",
    includes: ["Gentle machine wash", "Color-safe detergents", "Softener finish", "Air & tumble dried"],
    turnaround: "24–48 hours",
  },
  {
    id: "wash-fold",
    name: "Wash & Fold",
    icon: "fold",
    category: "Everyday",
    price: 140,
    unit: "per kg",
    prefix: "",
    popular: true,
    short: "Laundry by the kilo — washed, dried and neatly folded for you.",
    long:
      "Drop off a load and get it back fresh and perfectly folded. Billed by weight, this is the most affordable way to handle everyday household laundry.",
    includes: ["Washed by weight", "Sorted by colour", "Neatly folded", "Ready to put away"],
    turnaround: "24–48 hours",
  },
  {
    id: "wash-iron",
    name: "Wash & Iron (Steam)",
    icon: "iron",
    category: "Everyday",
    price: 180,
    unit: "per kg",
    prefix: "",
    popular: false,
    short: "Complete wash plus crisp steam ironing, billed per kilogram.",
    long:
      "Everything in Wash & Fold, finished with professional steam ironing so your clothes come back crisp, pressed and ready to wear.",
    includes: ["Full wash cycle", "Professional steam iron", "Crease-free finish", "Hung or folded"],
    turnaround: "24–48 hours",
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    icon: "suit",
    category: "Premium",
    price: 70,
    unit: "onwards",
    prefix: "from ",
    popular: true,
    short: "Expert solvent cleaning for suits, sarees, woollens and delicates.",
    long:
      "Our dry cleaning protects delicate and expensive fabrics that water can damage. Each garment is inspected, stain-treated, cleaned and finished by hand.",
    includes: ["Solvent-based deep clean", "Stain pre-treatment", "Safe for silk, wool & suits", "Hand-finished & pressed"],
    turnaround: "2–3 days",
  },
  {
    id: "steam-press",
    name: "Steam Press / Iron",
    icon: "iron",
    category: "Everyday",
    price: 20,
    unit: "onwards",
    prefix: "from ",
    popular: false,
    short: "Sharp, professional steam pressing — per garment.",
    long:
      "Already clean but creased? Our steam press gives shirts, trousers and ethnic wear a crisp, professional finish without a full wash.",
    includes: ["High-pressure steam", "Crisp creases", "Garment-safe heat", "Folded or hung"],
    turnaround: "Same day",
  },
  {
    id: "roll-press-saree",
    name: "Roll Press (Saree)",
    icon: "iron",
    category: "Premium",
    price: 120,
    unit: "per saree",
    prefix: "",
    popular: false,
    short: "Specialised roll pressing that keeps sarees smooth and pleat-perfect.",
    long:
      "Sarees need careful handling. Our roll press technique removes creases evenly across the full length while protecting zari, embroidery and delicate weaves.",
    includes: ["Full-length roll press", "Zari & border safe", "Even crease removal", "Carefully folded"],
    turnaround: "1–2 days",
  },
  {
    id: "shoe-cleaning",
    name: "Shoe Cleaning",
    icon: "shoe",
    category: "Specialty",
    price: 299,
    unit: "per pair",
    prefix: "",
    popular: false,
    short: "Deep cleaning and restoration for sneakers, leather and formals.",
    long:
      "Bring tired shoes back to life. We deep-clean soles and uppers, condition leather and refresh sneakers so they look close to new.",
    includes: ["Deep sole & upper clean", "Leather conditioning", "Deodorised", "Laces refreshed"],
    turnaround: "2–3 days",
  },
  {
    id: "dyeing",
    name: "Dyeing",
    icon: "palette",
    category: "Specialty",
    price: null,
    unit: "on request",
    prefix: "",
    popular: false,
    short: "Professional fabric dyeing to refresh or restore colour.",
    long:
      "Revive faded clothes or change a garment's colour with our professional dyeing service. Pricing depends on fabric and shade — ask us for a quote.",
    includes: ["Colour matching", "Even, lasting dye", "Fabric-appropriate process", "Quote on inspection"],
    turnaround: "3–5 days",
  },
  {
    id: "darning",
    name: "Darning (Raffu)",
    icon: "needle",
    category: "Specialty",
    price: null,
    unit: "on request",
    prefix: "",
    popular: false,
    short: "Skilled invisible mending for tears, holes and worn fabric.",
    long:
      "Our experienced raffu artisans repair tears, moth holes and worn patches so they're virtually invisible — extending the life of clothes you love.",
    includes: ["Invisible mending", "Tear & hole repair", "Thread colour matching", "Quote on inspection"],
    turnaround: "2–4 days",
  },
  {
    id: "express",
    name: "Express Service",
    icon: "bolt",
    category: "Premium",
    price: null,
    unit: "available",
    prefix: "",
    popular: false,
    short: "Need it fast? Same-day turnaround on most services.",
    long:
      "When you're in a hurry, our express service prioritises your order for same-day or next-morning delivery. A small priority surcharge applies.",
    includes: ["Priority handling", "Same-day option", "Doorstep delivery", "Ask for availability"],
    turnaround: "Same day",
  },
];

export function getServiceById(id) {
  return SERVICES.find((s) => s.id === id) || null;
}

// Most-popular subset for the home pricing preview.
export const PRICING_PREVIEW = ["normal-wash", "wash-fold", "wash-iron", "dry-cleaning"]
  .map(getServiceById)
  .filter(Boolean);

export const STEPS = [
  { title: "Schedule Pickup", text: "Book online or on WhatsApp in seconds." },
  { title: "We Collect", text: "Our team picks up from your doorstep — free." },
  { title: "Professional Cleaning", text: "Expert care for every fabric and garment." },
  { title: "Quality Check", text: "Every order inspected before it leaves." },
  { title: "Delivered Back", text: "Fresh, folded and pressed — back to your door." },
];

export const WHY = [
  { icon: "team", title: "Experienced Team", text: "Skilled fabric care since 1985." },
  { icon: "shield", title: "Quality Guaranteed", text: "100% satisfaction on every order." },
  { icon: "leaf", title: "Eco Friendly", text: "Gentle, safe cleaning products." },
  { icon: "tag", title: "Affordable Pricing", text: "Honest rates with no surprises." },
  { icon: "truck", title: "Pickup & Delivery", text: "Free doorstep collection & drop-off." },
  { icon: "bolt", title: "Fast Turnaround", text: "Same-day express service available." },
];

export const TESTIMONIALS = [
  { name: "Aarav Sharma", initial: "A", rating: 5, text: "Picked up and delivered the same day. Clothes came back spotless and perfectly pressed." },
  { name: "Priya Nair", initial: "P", rating: 5, text: "Trusted them with my silk sarees and an expensive suit — flawless dry cleaning every time." },
  { name: "Mohammed Khan", initial: "M", rating: 5, text: "Free pickup, fair prices and friendly staff. My go-to laundry in Andheri West." },
  { name: "Sneha Patel", initial: "S", rating: 4, text: "Reliable wash & fold by the kilo. Consistent quality and always on time." },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=600&q=80", alt: "Folded fresh laundry" },
  { src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80", alt: "Laundry machines" },
  { src: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=600&q=80", alt: "Neatly pressed shirts" },
  { src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=600&q=80", alt: "Clean white linens" },
  { src: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=600&q=80", alt: "Pressed garments on rack" },
  { src: "https://images.unsplash.com/photo-1469504512102-900f29606341?auto=format&fit=crop&w=600&q=80", alt: "Folded towels" },
];

export const FAQS = [
  {
    q: "Do you offer free pickup and delivery?",
    a: "Yes. Free doorstep pickup and delivery is included across Andheri West and nearby areas on every order — just book online or on WhatsApp.",
  },
  {
    q: "How long does an order take?",
    a: "Most wash, fold and iron orders are ready in 24–48 hours. Dry cleaning and specialty work take 2–3 days. Need it sooner? Ask for our same-day Express service.",
  },
  {
    q: "How do I get a price for dyeing or darning?",
    a: "Specialty work like dyeing and raffu (darning) is quoted on inspection, since it depends on the fabric and the work involved. Share a photo on WhatsApp or send it with a pickup and we'll confirm the price before starting.",
  },
  {
    q: "Which areas do you cover?",
    a: "We serve Andheri West and surrounding neighbourhoods from our shop on J.P. Road, opposite the BMC office. Not sure if you're in range? Call or WhatsApp us and we'll let you know.",
  },
  {
    q: "How do I pay?",
    a: "Pay on delivery by cash or UPI — whatever is convenient. Pricing is transparent with no hidden charges.",
  },
];

export const SOCIALS = [
  { label: "WhatsApp", href: `https://wa.me/${CONTACT.whatsapp}`, icon: "whatsapp" },
  { label: "Call", href: `tel:${CONTACT.phones[0].dial}`, icon: "phone" },
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: "mail" },
  { label: "Directions", href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapQuery)}`, icon: "pin" },
];

export const STATS = { since: 1985, years: new Date().getFullYear() - 1985 };
