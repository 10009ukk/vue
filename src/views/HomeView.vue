<template>

  <form-view></form-view>
  <todo-list></todo-list>
</template>

<script>
import FormView from '@/components/FormView.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  data() {
    return {

    }
  },
  components: {
    FormView,
    TodoList
  },
  computed: {

  },
}
</script>
