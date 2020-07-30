import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const backend_host = "https://cvbackendexpress.herokuapp.com";
// const backend_host = "http://localhost:3000";

const instance = axios.create({
    baseURL: backend_host + '/cv',
});

export default new Vuex.Store({
  state: {
    projects: [],
    certificates: [],
    aboutme: [],
    experiences: [],
    skills: [],
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      console.log("'SET_PROJECTS'");
      console.log("projects", projects);
      state.projects = projects;
    },
    SET_CERTIFICATES(state, certificates) {
      console.log("'SET_CERTIFICATES'");
      console.log("certificates", certificates);
      state.certificates = certificates;
    },
    SET_ABOUTME(state, aboutme) {
      console.log("'SET_ABOUTME'");
      console.log("aboutme", aboutme);
      state.aboutme = aboutme;
    },
    SET_EXPERIENCES(state, experiences) {
      console.log("'SET_EXPERIENCES'");
      console.log("experiences", experiences);
      state.experiences = experiences;
    },
    SET_SKILLS(state, skills) {
      console.log("'SET_SKILLS'");
      console.log("skills", skills);
      state.skills = skills;
    },
  },
  actions: {
    async set_projects(context) {
      console.log("'set_projects'");
      const response = await instance.get('/projects');
      console.log("response", response);
      // return context.dispatch('attempt', response.data)
      context.commit('SET_PROJECTS', response.data);
    },
    async set_certificates(context) {
      console.log("'set_certificates'");
      const response = await instance.get('/certificates');
      console.log("response", response);
      context.commit('SET_CERTIFICATES', response.data);
    },
    async set_aboutme(context) {
      console.log("'set_aboutme'");
      const response = await instance.get('/aboutme');
      console.log("response", response);
      context.commit('SET_ABOUTME', response.data);
    },
    async set_experiences(context) {
      console.log("'set_experiences'");
      const response = await instance.get('/experiences');
      console.log("response", response);
      context.commit('SET_EXPERIENCES', response.data);
    },
    async set_skills(context) {
      console.log("'set_skills'");
      const response = await instance.get('/skills');
      console.log("response", response);
      context.commit('SET_SKILLS', response.data);
    },
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
    getCertificates(state) {
      return state.certificates;
    },
    getAboutme(state) {
      return state.aboutme;
    },
    getExperiences(state) {
      return state.experiences;
    },
    getSkills(state) {
      return state.skills;
    },
  },
  modules: {}
});
