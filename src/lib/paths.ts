/** Base path when deployed to GitHub Pages (e.g. `/zalag`). Empty for local dev. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix internal absolute paths with the GitHub Pages base path. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
}

export function isInternalPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//");
}
