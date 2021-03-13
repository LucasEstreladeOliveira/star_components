<template>
  <div
    class="star-progressbar-wrapper"
    :style="`background-color: ${backgroundColor}`"
  >
    <div
      class="star-progressbar"
      :style="
        `height: ${height}; width: ${progress}%; background-color: ${progressColor}`
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "StarProgressbar",
  props: {
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    progressColor: {
      type: String,
      default: "#292d3e"
    },
    progress: {
      type: String,
      default: "20"
    },
    height: {
      type: String,
      default: "15px"
    }
  }
};
</script>

<style scoped>
.star-progressbar-wrapper {
  width: 100%;
  border-radius: 5px;
}
.star-progressbar {
  border-radius: 5px;
}
</style>
