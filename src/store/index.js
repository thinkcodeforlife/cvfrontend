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
    projects: []
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      console.log("'SET_PROJECTS'");
      console.log("projects", projects);
      state.projects = projects;
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
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  modules: {}
});
