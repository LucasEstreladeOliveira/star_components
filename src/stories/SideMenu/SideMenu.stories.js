import SideMenu from "./SideMenu.vue";

export default {
  title: "Example/SideMenu",
  component: SideMenu,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SideMenu },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><SideMenu v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      name: "item1",
      action: () => {
        console.log("item1");
      }
    },
    {
      name: "item2",
      action: () => {
        console.log("item2");
      }
    },
    {
      name: "item3",
      action: () => {
        console.log("item3");
      }
    },
    {
      name: "item4",
      action: () => {
        console.log("item4");
      }
    },
    {
      name: "item5",
      action: () => {
        console.log("item5");
      }
    }
  ]
};
