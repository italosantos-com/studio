const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: [
      "node_modules",
      ".next",
      "out",
      ".firebase",
      ".idx",
      "build",
      "dist",
      "coverage",
      "public",
      "*.config.js",
      "*.config.mjs",
      "ios-web-payments",
      ".dataconnect",
      "firebase-genkit",
      "src/firebase-genkit",
      "src/app/api/genkit",
      "src/app/api/genkit.disabled*",
      "functions",
      "dataconnect",
      "italosantos-com",
      "*.d.ts",
      "next-env.d.ts",
      "src/dataconnect-generated",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
];
