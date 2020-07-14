<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Projects v-bind:projects="projects"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Projects from "./components/Projects.vue";

import { mapState } from "vuex";

import store from "./store/index";

export default {
  name: "App",
  components: {
    HelloWorld,
    Projects
  },
  store,
  computed: mapState([
    "projects",
  ]),
  beforeCreate() {
    this.$store.dispatch("set_projects");
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
