module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // 'prettier',
    // 'plugin:prettier/recommended',
    'standard'
  ],
  plugins: [
    // 'prettier'
  ],
  rules: {
    // 'prettier/prettier': 'error',
    'indent': ['error', 'tab'],
    'semi': ['error', 'always'],
    'no-tabs': 'off'
  }
}

