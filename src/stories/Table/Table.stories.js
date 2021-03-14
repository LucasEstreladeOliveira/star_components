import Table from "./Table.vue";

export default {
  title: "Example/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template:
    '<div style="display: flex; justify-content: center; align-items: center;"><Table v-bind="$props" /></div>'
});

export const Basic = Template.bind({});
Basic.args = {
  table: {
    coluna1: ["row1", "row2", "row3"],
    coluna2: ["row1", "row2", "row3"],
    coluna3: ["row1", "row2", "row3"],
    coluna4: ["row1", "row2", "row3"],
    coluna5: ["row1", "row2", "row3"],
    coluna6: ["row1", "row2", "row3"],
    coluna7: ["row1", "row2", "row3"],
    coluna8: ["row1", "row2", "row3"],
    coluna9: ["row1", "row2", "row3"],
    coluna10: ["row1", "row2", "row3"],
    coluna11: ["row1", "row2", "row3"],
    coluna12: ["row1", "row2", "row3"]
  }
};
