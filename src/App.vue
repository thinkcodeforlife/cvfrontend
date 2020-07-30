<template>

  <div id="app">
    <Navigation name="Adnan Erdoğan" title="Software Developer" />
    <Aboutme aboutme="deneme" />
    <Projects v-bind:projects="projects"/>
    <Certificates v-bind:certificates="certificates"/>
    <Experiences v-bind:experiences="experiences"/>
    <Skills v-bind:skills="skills"/>
  </div>

</template>

<script>

  import Navigation from "./components/Navigation.vue";
  import Projects from "./components/Projects.vue";
  import Certificates from "./components/Certificates.vue";
  import Aboutme from "./components/Aboutme.vue";
  import Experiences from "./components/Experiences.vue";
  import Skills from "./components/Skills.vue";

  import { mapState } from "vuex";

  import store from "./store/index";

  export default {
    name: "App",
    components: {
      Navigation,
      Projects,
      Certificates,
      Aboutme,
      Experiences,
      Skills,
    },
    store,
    computed: mapState([
      "projects",
      "certificates",
      "aboutme",
      "experiences",
      "skills",
    ]),
    beforeCreate() {
      this.$store.dispatch("set_projects");
      this.$store.dispatch("set_certificates");
      this.$store.dispatch("set_aboutme");
      this.$store.dispatch("set_experiences");
      this.$store.dispatch("set_skills");
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
