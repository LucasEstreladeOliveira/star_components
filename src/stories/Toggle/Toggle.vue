<template>
  <div>
    <div class="switch">
      <div
        class="slider"
        :style="
          checked
            ? `background-color: ${activeColor};`
            : `background-color: ${backgroundColor};`
        "
        @click="checked = !checked"
      >
        <div
          class="button"
          :style="
            checked
              ? `-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px); background-color: ${buttonColor};`
              : `background-color: ${buttonColor};`
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#292d3e"
    },
    activeColor: {
      type: String,
      default: "#676E95"
    },
    buttonColor: {
      type: String,
      default: "#a6accd"
    }
  },
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.button {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  transition: 0.4s;
}

/* Rounded sliders */
.slider {
  border-radius: 8px;
}

.button {
  border-radius: 6px;
}
</style>
