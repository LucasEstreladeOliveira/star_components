import Datepicker from "./Datepicker.vue";

export default {
  title: "Example/Datepicker",
  component: Datepicker,
  argTypes: {
    backgroundColor: { control: "color" },
    monthColor: { control: "color" },
    monthTextColor: { control: "color" },
    textColor: { control: "color" },
    activeColor: { control: "color" },
    textActiveColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }
    },
    value: { control: "date" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Datepicker },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Datepicker @onDate="onDate" v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  value: new Date()
};
