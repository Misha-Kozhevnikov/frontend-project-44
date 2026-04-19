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
      indent: ['error', 2],
      'eol-last': ['error', 'always'],
      'arrow-parens': ['error', 'as-needed'],
      'no-console': 'off',
    },
  },
]
