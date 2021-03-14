import Picture from "./Picture.vue";
import img from "../../assets/stockImage.jpeg";

export default {
  title: "Example/Picture",
  component: Picture,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Picture },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Picture v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  src: img,
  width: 300,
  height: 100
};
