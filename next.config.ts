import type { NextConfig } from "next";

/** Project-site base path on GitHub Pages, e.g. `/zalag` for haroon966.github.io/zalag */
function getBasePath(): string {
  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    return `/${repo}`;
  }
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH.startsWith("/")
      ? process.env.BASE_PATH
      : `/${process.env.BASE_PATH}`;
  }
  return "";
}

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
