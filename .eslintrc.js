module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:@next/next/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@next/next/no-document-import-in-page': 'off',
  },
};
