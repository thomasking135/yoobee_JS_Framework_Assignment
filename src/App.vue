<template>
  <app-header />
  <router-view />
  <app-footer />
  <about-page />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AboutPage from "./components/AboutPage.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AboutPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
