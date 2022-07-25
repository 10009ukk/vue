import { createStore } from 'vuex'

export default createStore({
  state: {
    total: 0,
    toDos: []
  },
  getters: {
    toDoGet(state) {
      var item = JSON.parse(localStorage.getItem("toDos"))
      if (item != null) {
        state.toDos = item[0]
      }
      return state.toDos
    },
  },
  mutations: {
    toDoAdd: function (state, payload) {
      state.toDos.push(payload)
      localStorage.setItem('toDos', JSON.stringify([state.toDos]))
    },
    toDoDel: function (state, payload) {
      state.toDos = state.toDos.filter(todo => {
        return todo.key !== payload
      })
      localStorage.setItem('toDos', JSON.stringify([state.toDos]))
    },
    toDoCheak: function (state, payload) {
      state.toDos = state.toDos.map(todo => {
        if (todo.key === payload.key) {
          todo = {
            text: todo.text,
            key: todo.key,
            cheaked: !todo.cheaked
          }
        }
        return todo
      })
      localStorage.setItem('toDos', JSON.stringify([state.toDos]))
    }
  },
  actions: {
  },
  modules: {
  }
})
