module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
    "jest/globals": true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    "plugin:jest/style"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'import',
  ],
  rules: {
    "semi": [2, "never"],
    "quotes": [2, "single", { "avoidEscape": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "linebreak-style": 0,
  },
};
