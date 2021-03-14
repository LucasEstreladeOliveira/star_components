<template>
  <div
    class="star-table-wrapper"
    :style="
      `border: 2px solid ${textColor}; font-size: ${fontSize}px; font-family: ${font}`
    "
  >
    <div
      class="star-table-cols"
      :style="`grid-template-columns: ${calcGridCollumnsSize()};`"
    >
      <div
        class="star-table-col"
        :style="`background-color: ${textColor}; color: ${backgroundColor}`"
        v-for="(col, indexCol) in currentTable.cols"
        :key="col + indexCol"
      >
        {{ col }}
      </div>
    </div>
    <div
      class="star-table-rows-wrapper"
      :style="`grid-template-columns: ${calcGridCollumnsSize()};`"
    >
      <div
        class="star-table-rows"
        :style="`background-color: ${backgroundColor}; color: ${textColor}`"
        v-for="(row, indexRow) in currentTable.rows"
        :key="row + indexRow"
      >
        <div
          :class="
            `star-table-value ${
              indexValue === row.length - 1 ? 'star-table-last-row' : ''
            } ${
              indexRow === currentTable.rows.length - 1
                ? 'star-table-last-col'
                : ''
            }`
          "
          v-for="(value, indexValue) in row"
          :key="value + indexValue + indexRow"
        >
          {{ value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    table: {
      type: Object
    },
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    textColor: {
      type: String,
      default: "#292D3E"
    },
    fontSize: {
      type: Number,
      default: 16
    },
    font: {
      type: String,
      default: "Fira Code"
    }
  },
  computed: {
    currentTable() {
      let newTable = {
        cols: [],
        rows: []
      };
      Object.entries(this.table).map(val => {
        newTable.cols.push(val[0]);
        newTable.rows.push(val[1]);
      });
      return newTable;
    },
    rowTemplate() {
      return `${100 / this.currentTable.cols.length}%`;
    }
  },
  methods: {
    calcGridCollumnsSize() {
      let quantity = this.currentTable.cols.length;

      let gridTemplateArray = this.currentTable.cols.map(() => {
        return `${100 / quantity}% `;
      });
      let gridTemplate = gridTemplateArray.join("");
      return gridTemplate;
    }
  },
  mounted() {
    this.calcGridCollumnsSize();
    console.log(this.currentTable);
  }
};
</script>

<style scoped>
.star-table-wrapper {
  border-radius: 8px;
  width: 100%;
}
.star-table-cols {
  text-transform: uppercase;
}
.star-table-rows-wrapper {
  display: grid;
  width: 100%;
}
.star-table-cols,
.star-table-rows {
  display: grid;
}
.star-table-col,
.star-table-value {
  padding: 14px;
  width: -webkit-fill-available;
  text-align: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  border-right: 2px solid rgba(255, 255, 255, 0.1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
}
.star-table-last-row {
  border-bottom: unset;
}
.star-table-last-col {
  border-right: unset;
}

.star-table-rows:last-child {
  border-radius: 0px 0px 5px 0px;
}
.star-table-rows:first-child {
  border-radius: 0px 0px 0px 5px;
}
.star-table-col:first-child {
  border-radius: 5px 0px 0px 0px;
}
.star-table-col:last-child {
  border-radius: 0px 5px 0px 0px;
}
</style>
