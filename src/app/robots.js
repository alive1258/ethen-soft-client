const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard/*",
      },
    ],
    sitemap: "http://localhost:3000/sitemap.xml",
  };
};

export default robots;
