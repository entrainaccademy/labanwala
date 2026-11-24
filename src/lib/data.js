// Central place for content you'll replace later. Bracketed values are placeholders.

export const contactInfo = {
  address: "[Address]",
  hours: "[Opening hours]",
  phone: "[Phone]",
  directionsUrl: "", // add your Google Maps link
  email: "", // add your enquiry email, e.g. hello@yourdomain.com
};

export const socials = {
  instagram: "", // add your Instagram profile URL
  facebook: "", // add your Facebook page URL
  whatsapp: "", // add your WhatsApp link, e.g. https://wa.me/91XXXXXXXXXX
};

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/#story" },
  { label: "What Makes Us Unique", href: "/#unique" },
  { label: "Locations", href: "/#locations" },
  { label: "Instagram", href: "/#instagram" },
];

// Brand copy — edit freely.
export const story = {
  title: "Our Story",
  subtitle: "A taste worth travelling for.",
  paragraphs: [
    "Some tastes are so special that people cross countries just to try them. We believed that shouldn't have to be the case.",
    "The Laban Wala brings the rich, creamy world of Egyptian laban desserts closer to home: made fresh, finished with care, and served the way it should be. Cold, generous and meant to be shared.",
  ],
};

export const vision = {
  lead: "Something this special shouldn't be experienced only abroad.",
  body: "We want authentic laban desserts to feel familiar, accessible and part of everyday life. Our goal is to become the most loved laban dessert brand in the country, with welcoming spaces that bring families, friends and whole communities together.",
};

export const mission = {
  lead: "A taste worth the journey, in every city.",
  body: "We make rich, creamy, soulful desserts that honour their roots, blending traditional preparation with modern flavours so every cup feels both familiar and unforgettable.",
};

export const commitments = [
  { title: "Finest ingredients", body: "Quality ingredients in every cup, just as the originals do it." },
  { title: "Authentic methods", body: "Every kitchen trained to prepare each dessert the traditional way." },
  { title: "Warm spaces", body: "Outlets designed to feel inviting and rooted in the culture." },
  { title: "Partners who grow", body: "Franchise partners supported at every step to build their own success." },
];

export const marqueeWords = ["Creamy", "Cool", "Authentically Egyptian", "Made with the finest ingredients", "Made to be shared"];

// Product photos live in /public/images. Featured names follow the supplied menu reference.
// `pos` is the CSS object-position used when a photo is cropped into a card.
export const products = {
  cheeseBomb: { src: "/images/cheesebomb.png", pos: "50% 55%" },
  paris: { src: "/images/deparis.png", pos: "40% 55%" },
  nutBox: { src: "/images/img.png", pos: "50% 50%" },
  pistachioBox: { src: "/images/img1.png", pos: "50% 60%" },
  duoCups: { src: "/images/img2.png", pos: "50% 60%" },
  lotusCups: { src: "/images/img3.png", pos: "50% 60%" },
  oreo: { src: "/images/img4.png", pos: "50% 55%" },
  omAli: { src: "/images/img5.png", pos: "50% 55%" },
  poster: { src: "/images/labandessertimg.png", pos: "50% 50%" },
};

export const menuCategories = ["All", "Signature", "Cups", "Sharing Boxes"];

export const menuItems = [
  { id: 1, name: "Dubai Cheese Bomb", category: "Signature", description: "Kunafa dome drenched in chocolate and cheese cream.", price: "", image: products.cheeseBomb },
  { id: 2, name: "De Paris", category: "Sharing Boxes", description: "Fresh strawberries over a creamy dessert.", price: "", image: products.paris },
  { id: 3, name: "Fezea Pistachio Cake", category: "Sharing Boxes", description: "Pistachio and chocolate layers with a crisp cake base.", price: "", image: products.pistachioBox },
  { id: 4, name: "Crunchy Nut Box", category: "Sharing Boxes", description: "Chocolate, roasted nuts and pistachio layers.", price: "", image: products.nutBox },
  { id: 5, name: "Ruh Hayati", category: "Cups", description: "Chocolate, pistachio and strawberry, cup by cup.", price: "", image: products.duoCups },
  { id: 6, name: "Lotus & Kunafa Salankatia", category: "Cups", description: "Lotus-topped creamy dessert, pictured with a Pistachio Kunafa Cup.", price: "", image: products.lotusCups },
  { id: 7, name: "Oreo Ambalyh", category: "Cups", description: "Chocolate laban, Oreo crumble and cream drizzle.", price: "", image: products.oreo },
  { id: 8, name: "Crispy Umm Ali", category: "Signature", description: "Warm-spiced flaky pastry in creamy milk, with nuts.", price: "", image: products.omAli },
];

// Homepage "Signature Desserts" — picked from the full menu above (by id).
export const signatureDesserts = [1, 2, 6, 7].map((id) => menuItems.find((m) => m.id === id));
