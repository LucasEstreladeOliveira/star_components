<template>
  <div
    class="star-input-wrapper"
    :style="full ? 'display: block; width: 100%' : ''"
  >
    <input
      :id="id"
      v-if="mask"
      v-model="value"
      :type="password ? 'password' : 'text'"
      @keyup.enter="inputChanged"
      :maxlength="maxLength"
      v-mask="mask"
      :class="
        `star-input star-input--${size} star-input--${
          disabled ? 'disabled' : 'able'
        }`
      "
      :style="
        `border: 2px groove ${borderColor}; background-color: ${backgroundColor}; color: ${textColor}; width: ${
          full ? '-webkit-fill-available' : 'auto'
        }`
      "
    />
    <input
      :id="id"
      v-else
      v-model="value"
      :type="password ? 'password' : 'text'"
      @keyup.enter="inputChanged"
      :maxlength="maxLength"
      :class="
        `star-input star-input--${size} star-input--${
          disabled ? 'disabled' : 'able'
        }`
      "
      :style="
        `border: 2px groove ${borderColor}; background-color: ${backgroundColor}; color: ${textColor}; width: ${
          full ? '-webkit-fill-available' : 'auto'
        }`
      "
    />
    <div
      v-if="counter && maxLength"
      class="counter"
      :style="`color:${textColor};`"
    >
      {{ value.length }}/{{ maxLength }}
    </div>
  </div>
</template>

<script>
import identifier from "../../core/identifier";
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#292D3E"
    },
    backgroundColor: {
      type: String,
      default: "#A6ACCD"
    },
    password: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    textColor: {
      type: String,
      default: "#292D3E"
    },
    full: {
      type: Boolean,
      default: false
    },
    counter: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: Number,
      default: null
    }
  },

  computed: {
    id() {
      let id = identifier();
      return "star-input-" + id;
    }
  },
  methods: {
    inputChanged(val) {
      this.$emit("typed", val.target.value);
    }
  },
  watch: {
    value(val) {
      this.$emit("onInput", val);
    }
  }
};
</script>
<style scoped>
.star-input {
  font-family: "Fira Code", Fira Code;
  font-weight: 700;
  border-radius: 14px;
  outline: none;
  cursor: text;
  display: inline-block;
  line-height: 1;
  position: relative;
}
.star-input--disabled {
  pointer-events: none !important;
  opacity: 0.6 !important;
}
.star-input--small {
  font-size: 12px;
  padding: 10px 16px;
}
.star-input--small {
  font-size: 12px;
  padding: 10px 16px;
}
.star-input--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.star-input--large {
  font-size: 16px;
  padding: 12px 24px;
}

.counter {
  font-family: "Fira Code", Fira Code;
  font-size: 12px;
  text-align: end;
  padding-right: 7px;
  padding-top: 2px;
}
</style>
