import Radio from "./Radio.vue";

export default {
  title: "Example/Radio",
  component: Radio,
  argTypes: {
    backgroundColor: { control: "color" },
    buttonColor: { control: "color" },
    activeColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    value: { control: "date" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Radio },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Radio @onDate="onDate" v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  value: new Date()
};
