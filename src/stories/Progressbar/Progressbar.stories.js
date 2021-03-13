import Progressbar from "./Progressbar.vue";

export default {
  title: "Example/Progressbar",
  component: Progressbar,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Progressbar },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Progressbar v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {};
