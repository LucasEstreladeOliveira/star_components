import Snackbar from "./Snackbar.vue";

export default {
  title: "Example/Snackbar",
  component: Snackbar,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Snackbar },
  template: '<Snackbar v-bind="$props" />'
});

export const Basic = Template.bind({});
Basic.args = {};
