export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type Company = {
  name: string;
  category: string;
  description: string;
  /** Placeholder until the live site URL is provided. */
  url: string;
  /** Fills the card with the accent colour and drops it below the others. */
  highlight?: boolean;
};

export type CoreValue = {
  title: string;
  description: string;
  /** Optional artwork, blended into the top of the card. */
  image?: string;
  /** Fills the card with the accent colour instead of white. */
  highlight?: boolean;
};

export const site = {
  brand: "ONEHEART",
  tagline: "Business for Humanity",
  // TODO: replace with the production domain before launch.
  url: "https://example.com",
  metaDescription:
    "OneHeart is a purpose-driven Bangladeshi business group built on a simple belief: business should create value not only for owners, but for people and society as a whole.",

  nav: [
    { label: "About", href: "#about" },
    { label: "Vision & Mission", href: "#vision-mission" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Values", href: "#values" },
    { label: "Philosophy", href: "#philosophy" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "ONEHEART",
    heading: "Business for Humanity",
    // Verbatim opening of the About copy — swap here if you want a distinct hero line.
    supporting:
      "OneHeart is a purpose-driven Bangladeshi business group built on a simple belief: business should create value not only for owners, but for people and society as a whole.",
    actions: [
      { label: "Explore our portfolio", href: "#portfolio" },
      { label: "About OneHeart", href: "#about" },
    ] satisfies NavLink[],
  },

  about: {
    label: "About",
    heading: "About OneHeart",
    paragraphs: [
      "OneHeart is a purpose-driven Bangladeshi business group built on a simple belief: business should create value not only for owners, but for people and society as a whole.",
      "We believe that commercial success and social responsibility do not have to be separate. Business can be profitable while remaining just, honest, responsible, and human-centred.",
      "Our approach to business is guided by justice, integrity, quality, fairness, and service. We aim to build trusted brands that fulfil genuine human needs, promote Bangladeshi products and entrepreneurship, and contribute positively to the communities in which we operate.",
    ],
  },

  visionMission: {
    heading: "Vision & Mission",
    vision: {
      title: "Vision",
      body: "To become a trusted and leading Bangladeshi business group that demonstrates how business can create prosperity while advancing human wellbeing, social responsibility, and sustainable development.",
    },
    mission: {
      title: "Mission",
      body: "To conduct business with justice, integrity, and humanity by creating quality products and services that meet genuine needs, provide fair value to customers and stakeholders, promote Bangladeshi products and enterprise, and contribute meaningfully to society.",
    },
  },

  portfolio: {
    label: "Portfolio",
    heading: "Business Portfolio",
    companies: [
      {
        name: "OneBite",
        category: "Edible",
        description:
          "Our food and consumer-products venture, focused on delivering quality Bangladeshi products that families can trust in their everyday lives.",
        url: "#",
      },
      {
        name: "OneHeart Books",
        category: "eBooks & Publishing",
        description:
          "Our knowledge and publishing initiative, dedicated to making meaningful books, eBooks and ideas accessible to readers and contributing to learning, personal development, and positive thinking.",
        url: "#",
        highlight: true,
      },
      {
        name: "The Grace",
        category: "Lifestyle",
        description:
          "Our lifestyle venture, offering thoughtfully selected products designed to bring quality, usefulness, and a sense of wellbeing to everyday life.",
        url: "#",
      },
    ] satisfies Company[],
    future: {
      title: "Future Ventures",
      description:
        "OneHeart will continue to explore new opportunities where responsible entrepreneurship can solve genuine problems, create employment, promote local products, and generate sustainable value.",
    },
  },

  values: {
    label: "Values",
    heading: "Core Values",
    items: [
      {
        title: "Justice",
        description:
          "We believe business must be conducted fairly and responsibly.",
        image: "/justice.jpeg",
      },
      {
        title: "Integrity",
        description:
          "We do what is right, even when it is not the easiest choice.",
        image: "/integrity.png",
      },
      {
        title: "Quality",
        description:
          "We strive to provide products and services that genuinely deserve customers' trust.",
      },
      {
        title: "Humanity",
        description: "People are at the heart of our business decisions.",
        highlight: true,
      },
      {
        title: "Fairness",
        description:
          "We seek to create balanced value for customers, employees, partners, producers, and the wider community.",
      },
      {
        title: "Responsibility",
        description:
          "We accept our responsibility toward society, the environment, and future generations.",
        image: "/respon.jpeg",
      },
      {
        title: "Bangladesh First",
        description:
          "We believe in the potential of Bangladeshi people, products, entrepreneurs, and enterprises.",
        image: "/bd.avif",
      },
    ] satisfies CoreValue[],
  },

  philosophy: {
    label: "Philosophy",
    heading: "Business Philosophy",
    paragraphs: [
      "We do not see business merely as a way of making money.",
      "We see business as a means of creating value, serving people, creating opportunities, supporting local enterprise, and contributing to society.",
      "Therefore, our ambition is not simply to build bigger businesses. It is to build better businesses—businesses that people can trust and that create value with purpose.",
    ],
  },

  slogans: [
    "Business with Justice.",
    "Business with Purpose.",
    "Business for Humanity.",
  ],

  footer: {
    brand: "ONEHEART",
    tagline: "Business for Humanity",
    // Literal on purpose: prerendered pages cannot call new Date(). Bump when needed.
    copyrightYear: 2026,
    rightsNote: "All rights reserved.",
    credit: {
      label: "Design and Developed by",
      name: "Alvee",
      url: "https://alveeportfolio.vercel.app",
    },
    // TODO: add footer/social/legal links once they are provided.
  },
} as const;
