module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-prune-var': {
      skip: ['--font-', '--default-'], // フォント関連は残す
    },
    cssnano: {
      preset: ['default', {
        discardUnused: { fontFace: false },
        reduceIdents: false,
      }],
    },
  },
}