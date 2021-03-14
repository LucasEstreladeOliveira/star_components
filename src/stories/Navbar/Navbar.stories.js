import Navbar from "./Navbar.vue";
import logo from "../../assets/star-components.svg";

export default {
  title: "Example/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Navbar },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Navbar v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  logo: logo
};
