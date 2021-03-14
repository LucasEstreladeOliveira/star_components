<template>
  <div class="star-multiselect-wrapper">
    <div
      class="star-input-select"
      :style="`background: ${backgroundColor}`"
      @click.stop="showOptions = !showOptions"
    >
      <div class="star-selected-wrapper">
        <div
          class="star-selected"
          :key="index"
          v-for="(selected, index) in selectedOptions"
          @click.stop="removeFromSelected(selected)"
          :style="`color: ${textColor}`"
        >
          {{ selected }}
        </div>
      </div>
      <div class="star-select-caret">
        <font-awesome-icon
          :icon="showOptions ? 'caret-up' : 'caret-down'"
          class="star-select-caret"
          :color="textColor"
        />
      </div>
    </div>
    <div
      class="star-select-options"
      :style="`background: ${backgroundColor}`"
      v-if="showOptions"
    >
      <div
        class="star-select-option"
        v-for="(option, index) in options"
        :key="index"
        @click="addToSelected(option)"
        :style="`color: ${textColor}`"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [
        "option 1",
        "bigOptionWooooooooooooooooiaergohasdkasdlfbnw 2",
        "option 3",
        "option 4",
        "option 5",
        "option 6"
      ]
    },
    selected: {
      type: Array,
      default: () => ["option 5", "option 6"]
    },
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    textColor: {
      type: String,
      default: "#292D3E"
    }
  },
  data() {
    return {
      showOptions: false,
      selectedOptions: this.selected
    };
  },
  methods: {
    addToSelected(option) {
      let arrayOption = [option];
      this.selectedOptions = Array.from(
        new Set([...this.selectedOptions, ...arrayOption])
      );
      this.$emit("selected", this.selectedOptions);
    },
    removeFromSelected(option) {
      console.log(option);
      this.selectedOptions = this.selectedOptions.filter(
        item => item !== option
      );
      this.$emit("itemSelected", this.selectedOptions);
    }
  }
};
</script>

<style scoped>
.star-multiselect-wrapper {
  width: 250px;
}
.star-input-select {
  display: flex;
  padding: 10px;
  border-radius: 8px;
  z-index: 2;
  border-bottom: 2px solid rgb(255, 255, 255, 0.4);
  position: relative;
}
.star-selected-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
}
.star-selected {
  margin: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 8px;
  font-family: "Fira Code";
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.star-select-caret {
  display: flex;
  align-items: center;
  font-size: 25px;
}
.star-select-options {
  z-index: 0;
  position: relative;
  margin-top: -6px;
  height: 100%;
  padding: 16px 10px;
  border-radius: 0px 0px 8px 8px;
}
.star-select-option {
  padding: 8px;
  font-family: "Fira Code";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 8px;
}
.star-select-option:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
