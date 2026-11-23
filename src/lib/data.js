// Central place for content you'll replace later. Bracketed values are placeholders.

export const contactInfo = {
  address: "[Address]",
  hours: "[Opening hours]",
  phone: "[Phone]",
  directionsUrl: "", // add your Google Maps link
};

export const socials = {
  instagram: "", // add your Instagram profile URL
};

export const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/#story" },
  { label: "Vision & Mission", href: "/#vision" },
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

// Product photos live in /public/images. Names are inferred from the photos — edit freely.
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
  { id: 2, name: "Paris Strawberry Box", category: "Sharing Boxes", description: "Fresh strawberries over silky caramel laban.", price: "", image: products.paris },
  { id: 3, name: "Pistachio Choco Box", category: "Sharing Boxes", description: "Layers of pistachio cream, chocolate and crunch.", price: "", image: products.pistachioBox },
  { id: 4, name: "Crunchy Nut Box", category: "Sharing Boxes", description: "Chocolate, roasted nuts and pistachio layers.", price: "", image: products.nutBox },
  { id: 5, name: "Choco Pistachio Cups", category: "Cups", description: "Chocolate, pistachio and strawberry, cup by cup.", price: "", image: products.duoCups },
  { id: 6, name: "Lotus & Kunafa Cups", category: "Cups", description: "Biscoff-topped laban and a crisp kunafa cup.", price: "", image: products.lotusCups },
  { id: 7, name: "Oreo Laban Cup", category: "Cups", description: "Chocolate laban, Oreo crumble and cream drizzle.", price: "", image: products.oreo },
  { id: 8, name: "Om Ali Cup", category: "Signature", description: "Warm-spiced flaky pastry in creamy milk, with nuts.", price: "", image: products.omAli },
];

// Homepage "Signature Desserts" — picked from the full menu above (by id).
export const signatureDesserts = [1, 2, 6, 7].map((id) => menuItems.find((m) => m.id === id));
