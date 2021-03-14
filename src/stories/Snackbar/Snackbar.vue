<template>
  <div class="star-snackbar-wrapper">
    <transition name="fade">
      <div
        class="star-snackbar"
        v-if="showSnack"
        :style="`background-color: ${backgroundColor}; color: ${textColor}`"
      >
        <div
          :class="
            `star-snackbar-indicator 
          ${error ? 'star-snackbar-indicator-error' : ''}
          ${success ? 'star-snackbar-indicator-success' : ''}
          `
          "
        ></div>
        <div class="star-snackbar-message">
          {{ message }}
        </div>
        <div class="star-snackbar-close">
          <font-awesome-icon
            icon="times-circle"
            class="star-select-caret"
            :color="textColor"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Hey i'm working!"
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
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
  computed: {
    showSnack: {
      get() {
        this.toggleSnackbar(this.show);
        return this.show;
      },
      set() {
        return this.show;
      }
    }
  },
  methods: {
    toggleSnackbar(value) {
      this.showSnack = value;
    }
  }
};
</script>

<style scoped>
.star-snackbar-wrapper {
  display: flex;
  justify-content: center;
}
.star-snackbar {
  width: fit-content;
  text-align: center;
  position: absolute;
  display: flex;
  z-index: 1;
  top: 30px;
  height: 40px;
  border-radius: 8px;
}
.star-snackbar-indicator {
  width: 5px;
  border-radius: 8px 0px 0px 8px;
}
.star-snackbar-indicator-error {
  background: #f07178;
}
.star-snackbar-indicator-success {
  background: #c3e88d;
}
.star-snackbar-message {
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  font-family: "Fira Code";
}
.star-snackbar-close {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;
}
.fade-enter,
.fade-leave-to {
  -webkit-animation: fadeout 0.5s;
  animation: fadeout 0.5s;
}

@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>
