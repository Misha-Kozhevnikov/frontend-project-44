export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'no-console': 'off',
    },
  },
]
