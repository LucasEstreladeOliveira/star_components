import Card from "./Card.vue";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Card v-bind="$props">olá</Card></div>'
});

export const Basic = Template.bind({});
Basic.args = {};
