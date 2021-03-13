import Toggle from "./Toggle.vue";

export default {
  title: "Example/Toggle",
  component: Toggle,
  argTypes: {
    backgroundColor: { control: "color" },
    activeColor: { control: "color" },
    buttonColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Toggle },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Toggle v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {};
