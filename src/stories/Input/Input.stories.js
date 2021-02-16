import Input from "./Input.vue";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    borderColor: { control: "color" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Input },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Input @onInput="onInput" v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  value: ""
};
export const Password = Template.bind({});
Password.args = {
  value: "",
  password: true
};
