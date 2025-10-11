import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Disable unescaped apostrophe warnings
      "react/no-unescaped-entities": "off",

      // Allow using `any`
      "@typescript-eslint/no-explicit-any": "off",

      // Stop TypeScript from throwing on unused vars
      "@typescript-eslint/no-unused-vars": "off",

      // Optional: Disable wrapper type warning (String, Number, etc.)
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
]

export default eslintConfig;
