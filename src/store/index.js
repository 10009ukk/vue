import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: '',
      password: '',
      isLogin: false
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
      state.user.isLogin = true
      localStorage.setItem('user', JSON.stringify(state.user))

    }
  },
  actions: {
  },
  modules: {
  }
})
