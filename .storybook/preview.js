export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// .storybook/preview.js

export const decorators = [(story) => ({
  components: { story },
  template: '<div style="background-color:#f8f8f2; padding: 50px;"><story /></div>'
})];