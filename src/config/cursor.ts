/** Elements that trigger the custom target cursor (corners snap to bounds). */
export const CURSOR_TARGET_SELECTOR = [
  ".cursor-target",
  "button",
  "article",
  'a[class*="rounded-2xl"]',
  'a[class*="rounded-3xl"]',
  'a[class*="rounded-full"]',
  'li[class*="rounded-2xl"]',
  ".sm-panel-item",
  ".sm-toggle",
].join(", ");
