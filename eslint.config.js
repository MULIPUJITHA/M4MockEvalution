module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  