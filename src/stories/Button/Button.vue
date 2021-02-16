<template>
  <button
    type="button"
    :class="
      ` ripple star-button star-button--${this.size} star-button--${
        disabled ? 'disabled' : 'able'
      }`
    "
    :style="`background-color: ${bgColorComputed}; color: ${colorComputed};`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: "#22194D"
    },
    color: {
      type: String,
      default: "#FFFFFF"
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },

  computed: {
    colorComputed() {
      return this.color === "primary" ? "#FFFFFF" : this.color;
    },
    bgColorComputed() {
      return this.bgColor === "primary" ? "#22194D" : this.bgColor;
    }
  }
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Fira+Code);

.star-button {
  font-family: "Fira Code", Fira Code;
  font-weight: 700;
  border: 0;
  border-radius: 14px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  position: relative;
}
.star-button--disabled {
  pointer-events: none !important;
  opacity: 0.4 !important;
}
.star-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.star-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.star-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.star-button--large {
  font-size: 16px;
  padding: 12px 24px;
}

.star-button:active {
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5) inset,
    0 -2px 0 rgba(255, 255, 255, 0.2) inset;
  top: 1px;
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: rgba(255, 255, 255, 0.5)
    radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.2) 1%)
    center/15000%;
}
.ripple:active {
  background-color: rgba(255, 255, 255, 0.5);
  background-size: 100%;
  transition: background 0s;
}
</style>
