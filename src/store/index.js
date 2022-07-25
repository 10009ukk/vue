import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: '',
      password: '',
    }
  },
  getters: {
    userGet(state) {
      state.user = JSON.parse(localStorage.getItem("user")) || state.user
      return state.user
    }
  },
  mutations: {
    userSet: function (state) {
      localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
