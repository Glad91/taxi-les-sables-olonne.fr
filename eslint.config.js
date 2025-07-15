import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
  dirs: {
    src: [
      './components',
      './composables',
      './layouts',
      './pages',
      './plugins',
      './server',
      './utils',
    ],
  },
}).append(
  // Your custom configs here
  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    rules: {
      // Customize rules
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
    },
  },
)
