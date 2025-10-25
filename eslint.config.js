import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "detect", // يكتشف إصدار React (19.1.1 في مشروعك)
      },
    },
    rules: {
      ...js.configs.recommended.rules, // القواعد الأساسية من ESLint
      ...reactHooks.configs.recommended.rules, // قواعد react-hooks
      "react/jsx-no-undef": ["error"], // خطأ لو مكون JSX مش مستورد
      "no-unused-vars": ["warn", {
        varsIgnorePattern: "^[A-Z_]", // استثناء المتغيرات اللي بتبدأ بحرف كبير أو _
        ignoreRestSiblings: true // تجاهل المتغيرات غير المستخدمة في rest properties
      }],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }], // قاعدة react-refresh
    },
  },
];