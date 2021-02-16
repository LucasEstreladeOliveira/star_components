import Checkbox from "./Checkbox.vue";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    borderColor: { control: "color" },
    activetedColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Checkbox },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Checkbox @onClick="onClick" v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  checked: false
};
