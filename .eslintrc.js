module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'standard'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'vue'
    ],
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'off',
      'no-undef': 'off',
      'vue/no-side-effects-in-computed-properties': 'off',
    }
  }
  