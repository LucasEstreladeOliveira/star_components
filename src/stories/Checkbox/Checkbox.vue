<template>
  <div
    class="checkboxWrapper"
    :style="`border: 1px solid ${borderColor}`"
    @click="toggleCheck"
  >
    <div
      class="checkbox"
      :class="checked ? 'activated' : 'desactivated'"
      :style="
        checked
          ? `background: ${activetedColor} 0% 0% no-repeat padding-box`
          : ''
      "
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "#292d3e"
    },
    activetedColor: {
      type: String,
      default: "#a6accd"
    }
  },
  methods: {
    toggleCheck() {
      this.checked = !this.checked;
    }
  }
};
</script>

<style scoped>
.checkboxWrapper {
  height: 16px;
  width: 16px;
  border-radius: 4px;
  cursor: pointer;
}
.checkbox {
  height: 100%;
  width: 100%;
  border-radius: 4px;
}
.activated {
  -webkit-animation: fadeIn 0.3s ease-in-out;
  -moz-animation: fadeIn 0.3s ease-in-out;
  -o-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}

.desactivated {
  -webkit-animation: fadeOut ease 0.3s;
  -moz-animation: fadeOut ease 0.3s;
  -o-animation: fadeOut ease 0.3s;
  animation: fadeOut ease 0.3s;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
  100% {
    opacity: 0;
    background: #ffffff;
  }
}
@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
  100% {
    opacity: 0;
    background: #ffffff;
  }
}
@-o-keyframes fadeOut {
  0% {
    opacity: 1;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
  100% {
    opacity: 0;
    background: #ffffff;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
  100% {
    opacity: 0;
    background: #ffffff;
  }
}
</style>
