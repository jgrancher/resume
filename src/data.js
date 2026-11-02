export const about = `I've been building for the web for 14 years. Lately that's meant generative AI at Leonardo.ai and Canva, and before that, e-commerce storefronts and loyalty platforms.
I like taking features from 0 to 1: working the problem out with product and design, shipping it, then iterating on it. And I still care a lot about the small details that make an interface feel right.`;

export const experiences = [
  {
    company: "Canva",
    date: "05/26 - Now",
    location: "Sydney",
    logo: "icon-canva.png",
    title: "Senior software engineer",
    tasks: [
      {
        copy: "Built Canva's official n8n node from scratch, now a verified community node covering the whole Canva Connect API (TypeScript, OAuth 2.0, REST). I wrote the spec, published it on npm with launch templates, and handle user support:",
        link: {
          label: "n8n-nodes-canva",
          url: "https://github.com/canva-sdks/n8n-nodes-canva",
        },
      },
      {
        copy: "Maintain Canva's MCP server in ChatGPT and Claude. I build interactive widgets like the background remover and AI video, along with the upgrade and top-up purchases inside them, and look after analytics, localisation and partner support.",
      },
    ],
  },
  {
    company: "Leonardo.ai (acquired by Canva)",
    date: "07/24 - 05/26",
    location: "Sydney",
    logo: "icon-leonardo.png",
    title: "Senior product engineer (web)",
    tasks: [
      {
        copy: 'Started and led "Model Matrix", a JSON schema-driven platform where one config file per model handles validation, UI and API mapping. Adding a new AI model (Veo 3.1, Nano Banana, Kling…) became a config change rather than custom code.',
      },
      {
        copy: "Designed its architecture and rolled it out gradually across image and video generation. I mentored teammates through the first implementations and wrote the guides other squads used to add models themselves.",
      },
      {
        copy: "Owned the web side of big launches like video generation and token-based pricing, alongside product, design and backend. Other squads came to me with their web questions:",
        link: {
          label: "leonardo.ai",
          url: "https://leonardo.ai",
        },
      },
    ],
  },
  {
    company: "Userkind",
    date: "06/23 - 06/24",
    location: "Sydney",
    logo: "icon-userkind.jpeg",
    title: "Web developer (freelance)",
    tasks: [
      {
        copy: "Built custom websites on Next.js and headless CMSs like Sanity and Builder.io, with GSAP or Framer Motion for animation. One example:",
        link: {
          label: "morcofresh.com.au",
          url: "https://www.morcofresh.com.au",
        },
      },
      {
        copy: "Set up headless Shopify stores and their content models, so clients could run things without needing a developer.",
      },
    ],
  },
  {
    company: "Upgrowth",
    date: "12/22 - 05/23",
    location: "Sydney",
    logo: "icon-upgrowth.png",
    title: "Senior developer (contract)",
    tasks: [
      {
        copy: "Shipped features on BigW's storefront, a big multi-team codebase for one of Australia's largest retailers. Worked in Next.js, TypeScript and SCSS Modules, paying close attention to performance and accessibility:",
        link: {
          label: "bigw.com.au",
          url: "https://www.bigw.com.au",
        },
      },
    ],
  },
  {
    company: "Publicis",
    date: "06/22 - 10/22",
    location: "Sydney",
    logo: "icon-publicis.png",
    title: "Senior front-end developer (contract)",
    tasks: [
      {
        copy: "Built Swimming Australia's new website and a component library editors use to put together their own pages, with Next.js, headless WordPress, Emotion and Chakra UI:",
        link: {
          label: "swimming.org.au",
          url: "https://www.swimming.org.au",
        },
      },
    ],
  },
  {
    company: "Nightjar",
    date: "02/22 - 06/22",
    location: "Sydney",
    logo: "icon-nightjar.png",
    title: "Senior creative developer (contract)",
    tasks: [
      {
        copy: "Worked shoulder to shoulder with designers on award-winning websites, built with Next.js, Sanity, headless Shopify, Tailwind and GSAP:",
        link: {
          label: "nightjar.co",
          url: "https://nightjar.co",
        },
      },
    ],
  },
  {
    company: "Thinkmill",
    date: "02/21 - 02/22",
    location: "Sydney",
    logo: "icon-thinkmill.png",
    title: "Senior software engineer",
    tasks: [
      {
        copy: "Built new filtering features for SafetyCulture's iAuditor web app with React, Redux and Jest:",
        link: {
          label: "safetyculture.com",
          url: "https://safetyculture.com/",
        },
      },
      {
        copy: "Worked on the UI platform and design system for Enlitic's medical imaging product, using React, Storybook and Emotion.",
      },
    ],
  },
  {
    company: "ustwo",
    date: "08/17 - 01/21",
    location: "Sydney",
    logo: "icon-ustwo.png",
    title: "Senior product engineer",
    tasks: [
      {
        copy: "Built Semi Permanent's new website with TypeScript, Next.js, Framer Motion and Contentful's GraphQL API:",
        link: {
          label: "semipermanent.com",
          url: "https://semipermanent.com",
        },
      },
      {
        copy: "Prototyped and shipped products for Create with Google, including Audience Connect, an Electron app that adds offline videos and real-time audience interaction to Google Slides, built with Python, Preact and Firebase:",
        link: {
          label: "create.withgoogle.com",
          url: "https://create.withgoogle.com",
        },
      },
      {
        copy: 'Built "Card Companion", Qantas\' loyalty platform, as part of a cross-functional product team, with React, Next.js, GraphQL and Apollo:',
        link: {
          label: "cardcompanion.qantas.com",
          url: "https://cardcompanion.qantas.com",
        },
      },
    ],
  },
  {
    company: "holler",
    date: "05/15 - 08/17",
    location: "Sydney",
    logo: "icon-holler.png",
    title: "Front-end developer",
    tasks: [
      {
        copy: "Built myAudi, Audi Australia's customer loyalty portal, with React, React Router and Redux:",
        link: {
          label: "myaudi.com.au",
          url: "https://myaudi.com.au/",
        },
      },
      {
        copy: "Made campaign sites for Audi Australia, working closely with the design and strategy teams.",
      },
    ],
  },
  {
    company: "Exomind",
    date: "10/12 - 09/14",
    location: "Paris",
    logo: "icon-exomind.png",
    title: "Front-end & iOS developer",
    tasks: [
      {
        copy: "Built the news website for TF1, France's biggest TV channel:",
        link: {
          label: "tf1.fr/news",
          url: "https://tf1.fr/news",
        },
      },
      {
        copy: "Teamed up with TBWA on the mobile site for Paco Rabanne's Invictus fragrance, animated with GSAP:",
        link: {
          label: "FWA case study",
          url: "https://thefwa.com/cases/invictus-award-by-paco-rabanne",
        },
      },
    ],
  },
];

export const languages = [
  { flag: "fr", label: "French (native)" },
  { flag: "uk", label: "English (fluent)" },
  { flag: "jp", label: "Japanese (learning)" },
];

export const hobbies = [
  { icon: "dumbbell", label: "Gym & running" },
  { icon: "invader", label: "Collecting retro games" },
  { icon: "music", label: "Electronic music" },
];

export const education = [
  {
    date: "2009 - 2012",
    degree: "Master in Digital Communication Engineering and Management",
    location: "Paris",
    logo: "icon-hetic.png",
    school: "HETIC",
  },
  {
    date: "2007 - 2009",
    degree: "Higher Diploma in Software Design & Development",
    location: "Rouen",
    logo: "icon-cesi.png",
    school: "CESI (formerly eXia.CESI)",
  },
];
