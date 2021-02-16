import MyButton from "./Button.vue";

export default {
  title: "Example/Button",
  component: MyButton,
  argTypes: {
    bgColor: { control: "color" },
    color: { control: "color" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><my-button :onClick="onClick" v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  label: "Button"
};
