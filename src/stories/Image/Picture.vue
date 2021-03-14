<template>
  <div class="star-image-wrapper">
    <img
      class="star-image"
      :src="src"
      :style="
        `height: ${currentHeight}; width: ${currentWidth}; object-fit: ${objectFit}; border-radius: ${currentBorderRadius}`
      "
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    height: {
      type: Number || String,
      default: "auto"
    },
    width: {
      type: Number || String,
      default: "auto"
    },
    objectFit: {
      type: String,
      default: "cover"
    },
    borderRadius: {
      type: Number || String,
      default: 8
    }
  },
  computed: {
    currentWidth() {
      return typeof this.width === "string" ? this.width : `${this.width}px`;
    },
    currentHeight() {
      return typeof this.height === "string" ? this.height : `${this.height}px`;
    },
    currentBorderRadius() {
      return typeof this.borderRadius === "string"
        ? this.borderRadius
        : `${this.borderRadius}px`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
