<template>
  <div id="app">
    <Header />
    <FirstCityWidget />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import FirstCityWidget from "./components/FirstCityWidget.vue";

export default {
  name: "app",
  components: {
    Header,
    FirstCityWidget,

  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
