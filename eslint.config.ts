import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
  },
  {
    ignores: [
      'dist',
      'dist-electron',
      'src-tauri/target',
      'node_modules',
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
