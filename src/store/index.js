import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    tasks: {
      errors: [],
      loading: false,
      data: {
        vDBIoE0oUIF: {
          id: 'vDBIoE0oUIF',
          description: 'Esta es una descripción',
          name: 'Título de la tarea',
          startedAt: '2021-10-18T15:12:21.558000+00:00',
        },
      },
    },
    inboxList: {
      errors: [],
      loading: false,
      data: [
        'vDBIoE0oUIF',
      ],
    },

  },
  getters: {
    currentTask: state => state.tasks,
    test: state => state.inboxList.data.map(cid => tasks.data[cid]),
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
});
