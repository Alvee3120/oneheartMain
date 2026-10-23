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
};

export type CoreValue = {
  title: string;
  description: string;
};

export const site = {
  brand: "ONEHEART",
  tagline: "Business for Humanity",
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
    heading: "Core Values",
    items: [
      {
        title: "Justice",
        description: "We believe business must be conducted fairly and responsibly.",
      },
      {
        title: "Integrity",
        description: "We do what is right, even when it is not the easiest choice.",
      },
      {
        title: "Quality",
        description:
          "We strive to provide products and services that genuinely deserve customers' trust.",
      },
      {
        title: "Humanity",
        description: "People are at the heart of our business decisions.",
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
      },
      {
        title: "Bangladesh First",
        description:
          "We believe in the potential of Bangladeshi people, products, entrepreneurs, and enterprises.",
      },
    ] satisfies CoreValue[],
  },

  philosophy: {
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
    // TODO (Step 8): add footer/social/legal links once they are provided.
  },
} as const;
