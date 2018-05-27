module.exports = {
  extends: 'standard',
  globals: { angular: true, $: true, APP_ENV: true, moment: true },
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'space-before-function-paren': ['error', 'never']
  }
}
