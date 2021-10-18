import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks,
  },
  getters: {
    currentTask: state => state.tasks[0],
  },
  mutations: {
    UPDATE_TASK(state, newPricing) {
      // remove the oldest price
      state.tasks.pop();

      // add the new price
      state.tasks = [newPricing, ...state.prices];
    },
  },
  actions: {
  },
  modules: {
  },
});
