import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    // getters 는 전달인자를 받을 수 없는데, 
    //state 전달 인자는 말그대로 현재 state 를 나타냄
    increaseCount(state) {
      return ++state.count
    }
  },
  mutations: {
    addCounter: function (state) {
      return state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
