const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  title: "AndNikDev | Nikolayk Muñoz",
  description: "Portafolio y blog de Nikolayk Muñoz — Full Stack Developer & Data Analytics/Engineering",
  url: "https://andnikdev.github.io/AndNikDevPortfolio",
};

export const author = {
  name: "Nikolayk Muñoz",
  username: "andnikdev",
  avatar: `${basePath}/profile.jpg`,
  bio: "Full Stack Developer • AI-Augmented Engineer • Data Analytics & Engineering",
  email: "andnik.developer@gmail.com",
  links: {
    github: "https://github.com/andnikdev",
    linkedin: "https://www.linkedin.com/in/nikolaykmunozalvarez/",
    twitter: "https://twitter.com/andnikdev",
  },
};
