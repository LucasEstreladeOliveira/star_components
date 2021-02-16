<template>
  <div class="star-datepicker-wrapper">
    <div class="star-datepicker-input-wrapper">
      <Input
        :disabled="!toggle"
        :value="currentDay"
        @typed="inputChangeValue"
        mask="##/##/####"
      />
      <div class="star-datepicker-button-wrapper" @click="toggle = !toggle">
        <font-awesome-icon icon="calendar-alt" class="star-datepicker-button" />
      </div>
    </div>
    <transition name="slide">
      <div
        class="star-datepicker"
        :style="`background-color: ${backgroundColor}`"
        v-if="toggle"
      >
        <div
          class="month"
          :style="
            `background-color: ${monthColorComputed}; color: ${monthTextColorComputed}`
          "
        >
          <font-awesome-icon
            icon="angle-left"
            class="icon prev"
            @click="goPrevMonth"
          />
          <div class="date">
            <h1>{{ currentDay }}</h1>
          </div>
          <font-awesome-icon
            icon="angle-right"
            class="icon right"
            @click="goNextMonth"
          />
        </div>
        <div class="weekdays">
          <div :style="`color: ${textColor}`">Dom</div>
          <div :style="`color: ${textColor}`">Seg</div>
          <div :style="`color: ${textColor}`">Ter</div>
          <div :style="`color: ${textColor}`">Qua</div>
          <div :style="`color: ${textColor}`">Qui</div>
          <div :style="`color: ${textColor}`">Sex</div>
          <div :style="`color: ${textColor}`">Sab</div>
        </div>
        <div class="days">
          <div
            class="prev-date"
            v-for="prevDay in prevDays"
            :key="prevDay.id"
            :style="`color: ${textColor}`"
          >
            {{ prevDay }}
          </div>
          <div
            v-for="day in monthDays"
            :key="day.id"
            :style="
              `color: ${
                day.today ? textActiveColorComputed : textColor
              } ; background-color: ${day.today ? activeColorComputed : ''} `
            "
            :class="day.today ? 'today' : ''"
            @click="
              changeDate(
                day.value,
                currentDate.getMonth(),
                currentDate.getFullYear()
              )
            "
          >
            {{ day.value }}
          </div>
          <div
            class="next-date"
            v-for="nextDay in nextDays"
            :key="nextDay.id"
            :style="`color: ${textColor}`"
          >
            {{ nextDay }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from "../Input/Input";
// import identifier from "../../core/identifier";
export default {
  name: "Datepicker",
  components: {
    Input
  },
  data() {
    return {
      toggle: false
    };
  },
  props: {
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    monthColor: {
      type: String
    },
    monthTextColor: {
      type: String
    },
    textColor: {
      type: String,
      default: "#292d3e"
    },
    activeColor: {
      type: String
    },
    textActiveColor: {
      type: String
    },
    value: {
      type: Date,
      default: new Date()
    }
  },
  computed: {
    currentDate() {
      return new Date(this.value);
    },
    activeColorComputed() {
      return this.activeColor ? this.activeColor : this.textColor;
    },
    textActiveColorComputed() {
      return this.textActiveColor ? this.textActiveColor : this.backgroundColor;
    },
    monthColorComputed() {
      return this.monthColor ? this.monthColor : this.textColor;
    },
    monthTextColorComputed() {
      return this.monthText ? this.monthText : this.backgroundColor;
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonth() {
      return this.currentDate.getMonth();
    },
    currentDay() {
      let day =
        this.currentDate.getDate() > 9
          ? this.currentDate.getDate()
          : `0${this.currentDate.getDate()}`;
      let month =
        this.currentDate.getMonth() > 8
          ? this.currentDate.getMonth() + 1
          : `0${this.currentDate.getMonth() + 1}`;
      return `${day}/${month}/${this.currentDate.getFullYear()}`;
    },
    lastDay() {
      return new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      ).getDate();
    },
    prevLastDay() {
      return new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        0
      ).getDate();
    },
    monthDays() {
      let days = [];
      for (let i = 1; i <= this.lastDay; i++) {
        if (i === this.currentDate.getDate()) {
          days.push({ value: i, today: true });
        } else {
          days.push({ value: i, today: false });
        }
      }
      return days;
    },
    firstDayIndex() {
      let newDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      );
      return newDate.getDay();
    },
    lastDayIndex() {
      return new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      ).getDay();
    },
    prevDays() {
      let prev = [];
      for (let x = this.firstDayIndex; x > 0; x--) {
        prev.push(this.prevLastDay - x + 1);
      }
      return prev;
    },
    nextDays() {
      let nextDays = 7 - this.lastDayIndex - 1;
      let next = [];
      for (let x = 1; x <= nextDays; x++) {
        next.push(x);
      }
      return next;
    }
  },
  methods: {
    changeDate(day, month, year) {
      let newDate = new Date(year, month, day);
      this.value = newDate;
    },
    goPrevMonth() {
      let newDate = new Date(this.currentDate);
      newDate.setMonth(this.currentMonth - 1);
      if (this.currentMonth === 0) {
        newDate.setFullYear(this.currentYear - 1);
      }
      this.value = new Date(newDate);
    },
    goNextMonth() {
      let date = new Date(this.currentDate);
      let nextMonth = new Date(date.setMonth(this.currentMonth + 1));
      let newDate = new Date(
        this.currentDate.getFullYear(),
        nextMonth.getMonth(),
        this.currentDate.getDate()
      );
      if (this.currentMonth === 11) {
        let nextYear = new Date(newDate.setFullYear(this.currentYear + 1));
        newDate = new Date(
          nextYear.getFullYear(),
          newDate.getMonth(),
          newDate.getDate()
        );
      }
      this.value = new Date(newDate);
    },
    inputChangeValue(val) {
      let newVal = val.split("/");
      let day = parseInt(newVal[0], 10);
      let month = parseInt(newVal[1], 10);
      let year = parseInt(newVal[2], 10);

      let newDate = new Date(year, month - 1, day);
      this.value = newDate;
    }
  },
  watch: {
    value(val) {
      this.$emit("onDate", val);
    }
  }
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Fira+Code);

.star-datepicker-wrapper {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
}
.star-datepicker-input-wrapper {
  display: flex;
}
.star-datepicker-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(166, 172, 205);
  background: rgb(41, 45, 62);
  height: auto;
  width: 60px;
  border: 2px groove rgb(41, 45, 62);
  position: relative;
  left: -25px;
  border-radius: 14px;
}
.star-datepicker-button {
  margin-left: 14px;
  margin-bottom: 2px;
}
.star-datepicker {
  width: 250px;
  border-radius: 14px;
  box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.2);
}
.month {
  border-radius: 14px;
  font-family: "Fira Code", Fira Code;
  width: auto;
  font-size: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  text-align: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.icon {
  font-size: 20px;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.weekdays {
  width: 100%;
  font-family: "Fira Code", Fira Code;
  height: 30px;
  display: flex;
  align-items: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.weekdays div {
  font-size: 12px;
  margin: 0 5px;
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.days {
  width: 100%;
  font-family: "Fira Code", Fira Code;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.days div {
  font-size: 10px;
  margin: 5px;
  width: calc((100% - 80px) / 7);
  height: 24px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  align-items: center;
  transition: background-color 0.2s;
}

.days div:hover:not(.today, .prev-date, .next-date) {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.prev-date,
.next-date {
  opacity: 0.4;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 0);
  -webkit-transition-timing-function: cubic-bezier(0, 0);
  -o-transition-timing-function: cubic-bezier(0, 0);
  transition-timing-function: cubic-bezier(0, 0);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>

<style>
.star-datepicker-wrapper .star-input-wrapper {
  z-index: 1;
}
.star-datepicker-wrapper .star-input--disabled {
  opacity: 1 !important;
}
</style>
