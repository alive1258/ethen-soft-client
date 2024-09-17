import { rule } from "postcss";

export default function robots() {
  return {
    rule: {
      urlAgent: "*",
      allow: "*",
      disallow: "/dashboard/*",
    },
    sitemap: "http://loaclhost:3000/sitemap.xml",
  };
}
