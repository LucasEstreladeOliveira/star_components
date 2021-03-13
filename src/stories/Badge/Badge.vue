<template>
  <div
    class="star-badge-wrapper"
    :style="
      `background: ${backgroundColor}; border-radius: ${size}px; padding: ${size /
        2.5}px ${size / 1.7}px;`
    "
  >
    <div
      class="star-badge-title"
      :style="`color: ${textColor}; font-size: ${size}px`"
    >
      {{ title }}
    </div>
    <div
      class="star-badge-close"
      :style="`font-size: ${size}px; margin-left: ${size / 2.5}px;`"
      @click="() => close()"
    >
      <font-awesome-icon
        icon="times-circle"
        class="star-badge-button"
        :color="textColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Badge"
    },
    backgroundColor: {
      type: String,
      default: "#A6ACCD"
    },
    textColor: {
      type: String,
      default: "#292D3E"
    },
    close: {
      type: Function,
      default: () => {}
    },
    size: {
      type: String,
      default: "16"
    }
  }
};
</script>

<style scoped>
.star-badge-wrapper {
  display: flex;
  border-radius: 15px;
}
.star-badge-close {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.star-badge-title {
  font-family: "Fira Code", Fira Code;
  font-weight: bold;
  margin-left: 2.5px;
}
</style>
