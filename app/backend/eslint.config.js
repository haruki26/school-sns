import baseConfig from '@hono/eslint-config'

export default [
  ...baseConfig,
  {
    ignores: ['./eslint.config.js', './prettier.config.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
]
