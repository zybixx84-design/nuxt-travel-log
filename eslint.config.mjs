import antfu from "@antfu/eslint-config";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

// @ts-check

export default antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,

    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },

  {
    extends: [
      eslintPluginTailwindcss.configs.recommended,
    ],

    settings: {
      tailwindcss: {
        cssConfigPath: "./app/assets/css/main.css",
      },
    },

    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],

      "perfectionist/sort-imports": [
        "error",
        {
          tsconfig: {
            rootDir: ".",
          },
        },
      ],

      "unicorn/filename-case": ["error", {
        case: "camelCase",
        ignore: [
          "README.md",
          "pnpm-workspace.yaml",
        ],
      }],
    },
  },

  {
    files: ["pnpm-workspace.yaml"],
    rules: {
      "pnpm/yaml-enforce-settings": "off",
    },
  },
);
