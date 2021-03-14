<template>
  <div class="star-side-menu-wrapper">
    <div class="star-side-menu">
      <div
        class="star-side-menu-item"
        v-for="(item, index) in currentItems"
        :key="item + index"
        @click="item.action"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    currentItems() {
      return this.items;
    }
  }
};
</script>

<style scoped>
.star-side-menu-wrapper {
  background: #292d3e;
  color: #a6accd;
  border-radius: 8px;
  font-family: "Fira Code";
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.star-side-menu-item {
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.star-side-menu-item:last-child {
  border-bottom: unset;
}
.star-side-menu-item:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
