#!/usr/bin/env node
/**
 * Serve the static export the same way GitHub Pages does: site root is /zalag/
 * (plain `serve out` breaks because HTML requests /zalag/_next/... but files live at out/_next/...)
 */
import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const previewRoot = path.join(root, ".preview");
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "zalag";
const siteDir = path.join(previewRoot, repo);
const port = process.env.PORT ?? "3002";

rmSync(previewRoot, { recursive: true, force: true });
mkdirSync(siteDir, { recursive: true });
cpSync(outDir, siteDir, { recursive: true });

writeFileSync(
  path.join(previewRoot, "index.html"),
  `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/${repo}/"><title>Redirect</title></head><body><p><a href="/${repo}/">Open site</a></p></body></html>`,
);

const url = `http://localhost:${port}/${repo}/`;
console.log(`\n  GitHub Pages preview: ${url}\n`);

const child = spawn(
  "npx",
  ["--yes", "serve", previewRoot, "-l", port],
  { stdio: "inherit", cwd: root, shell: true },
);

child.on("exit", (code) => process.exit(code ?? 0));
