import Modal from "./Modal.vue";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<Modal v-bind="$props" />'
});

export const Basic = Template.bind({});
Basic.args = {};
