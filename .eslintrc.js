module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended",
    "prettier",
  ],
  env: {
    es6: true,
    node: true,
  },
  settings: {
    "prettier-vue": {
      SFCBlocks: {
        template: false,
      },
    },
  },
  rules: {
    "vue/html-indent": "error",
  },
};
