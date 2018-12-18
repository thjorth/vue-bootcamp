import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResult: [],
  },
  getters: {
    getSearchResult: (state) => {
      return state.searchResult;
    }
  },
  mutations: {
    setSearchResult: (state, result) => {
      state.searchResult = result;
    }
  },
  actions: {

  }
})
