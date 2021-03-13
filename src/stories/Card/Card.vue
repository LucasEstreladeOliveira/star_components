<template>
  <div
    class="star-card-wrapper"
    :style="
      `background-color: ${backgroundColor}; height: ${height}; width: ${width}; color: ${textColor}`
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    textColor: {
      type: String,
      default: "#292d3e"
    },
    height: {
      type: String,
      default: "100px"
    },
    width: {
      type: String,
      default: "100px"
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Fira+Code);

.star-card-wrapper {
  border-radius: 14px;
  padding: 10px;
  font-family: "Fira Code", Fira Code;
  box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.2);
}
</style>
