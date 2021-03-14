import Multiselect from "./Multiselect.vue";

export default {
  title: "Example/Multiselect",
  component: Multiselect,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Multiselect },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Multiselect v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {};
