import Badge from "./Badge.vue";

export default {
  title: "Example/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Badge },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Badge v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {};
