<template>
  <div class="star-navbar-wrapper" :style="`background: ${backgroundColor};`">
    <div class="star-navbar-logo">
      <img :src="logo" />
    </div>
    <div class="star-navbar-links">
      <div
        class="star-navbar-link-wrapper"
        v-for="(link, index) in links"
        :key="index"
        @click="() => link.action()"
      >
        <div class="star-navbar-link" :style="`color: ${textColor}`">
          {{ link.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [
        { title: "Home", action: () => {} },
        { title: "Route 1", action: () => {} },
        { title: "Route 2", action: () => {} },
        { title: "Logout", action: () => {} }
      ]
    },
    logo: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "#a6accd"
    },
    textColor: {
      type: String,
      default: "#292D3E"
    }
  }
};
</script>

<style scoped>
.star-navbar-wrapper {
  display: flex;
  width: 100%;
  border-radius: 8px;
}
.star-navbar-logo {
  width: 50%;
  height: 50px;
  padding: 10px;
  margin-left: 10px;
}
.star-navbar-logo img {
  height: 100%;
  border-radius: 8px;
}
.star-navbar-links {
  display: flex;
  align-content: space-between;
  width: 50%;
  height: 50px;
  align-items: center;
  padding: 10px;
}
.star-navbar-link {
  width: 50%;
  margin: auto;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.star-navbar-link-wrapper {
  display: flex;
  width: 100%;
  text-align: center;
  font-family: "Fira Code";
  height: 100%;
}
.star-navbar-link:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
