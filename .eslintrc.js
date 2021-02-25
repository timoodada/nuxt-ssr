module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'keyword-spacing': 'error',
    'arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    camelcase: ['error', {
      properties: 'never',
    }],
    'space-infix-ops': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'vue/singleline-html-element-content-newline': 0,
    'space-before-function-paren': ['error', 'never'],
    'vue/max-attributes-per-line': 'off',
  },
};
