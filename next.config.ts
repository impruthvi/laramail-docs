import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "prepend",
          properties: {
            className: ["anchor-link"],
            ariaHidden: "true",
            tabIndex: -1,
          },
        },
      ],
      ["@shikijs/rehype", { theme: "catppuccin-mocha" }],
    ],
  },
});

export default withMDX(nextConfig);
