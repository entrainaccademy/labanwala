// Central place for content you'll replace later. Bracketed values are placeholders.

export const WHATSAPP_NUMBER = ""; // e.g. "201001234567" (digits only, with country code)

export function whatsappUrl(text = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const contactInfo = {
  address: "[Address]",
  hours: "[Opening hours]",
  phone: "[Phone]",
  whatsapp: "[WhatsApp number]",
  directionsUrl: "https://maps.google.com/", // replace with your Google Maps link
};

export const socials = {
  instagram: "https://instagram.com/", // replace with your profile
};

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/#story" },
  { label: "How to Order", href: "/#order" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export const signatureDesserts = [
  { name: "Dubai Cheese Bomb", price: "[price]", tint: "sky" },
  { name: "Salankatiya", price: "[price]", tint: "ice" },
  { name: "[Best-seller 3]", price: "[price]", tint: "azure" },
  { name: "[Best-seller 4]", price: "[price]", tint: "royal" },
];

export const steps = [
  { title: "Pick your dessert", body: "Browse the menu and choose your favourites." },
  {
    title: "Message us on WhatsApp",
    body: "Tap the button and send your order. We reply to confirm it.",
  },
  { title: "Enjoy it fresh", body: "[pickup/delivery details]" },
];

export const reviews = [
  { quote: "[Customer review quote 1]", name: "[Customer name]" },
  { quote: "[Customer review quote 2]", name: "[Customer name]" },
  { quote: "[Customer review quote 3]", name: "[Customer name]" },
];

// Menu categories and items are placeholders — edit freely.
export const menuCategories = ["All", "Signature", "Cups", "Sharing Boxes"];

export const menuItems = [
  { id: 1, name: "Dubai Cheese Bomb", category: "Signature", description: "[Description]", price: "[price]", tint: "sky" },
  { id: 2, name: "Salankatiya", category: "Signature", description: "[Description]", price: "[price]", tint: "ice" },
  { id: 3, name: "[Menu item 3]", category: "Signature", description: "[Description]", price: "[price]", tint: "azure" },
  { id: 4, name: "[Menu item 4]", category: "Cups", description: "[Description]", price: "[price]", tint: "royal" },
  { id: 5, name: "[Menu item 5]", category: "Cups", description: "[Description]", price: "[price]", tint: "sky" },
  { id: 6, name: "[Menu item 6]", category: "Cups", description: "[Description]", price: "[price]", tint: "ice" },
  { id: 7, name: "[Menu item 7]", category: "Sharing Boxes", description: "[Description]", price: "[price]", tint: "azure" },
  { id: 8, name: "[Menu item 8]", category: "Sharing Boxes", description: "[Description]", price: "[price]", tint: "royal" },
];
