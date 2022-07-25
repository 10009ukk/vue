<template lang="">
    <h1>{{ total }} / {{ toDoList.length }}</h1>
    <ul>
        <li v-for="toDo in toDoList" :key="toDo.key">
            <todo-view :toDo="toDo" @cheaked="onTotal" @delete="onDelete"></todo-view>
        </li>
    </ul>
</template>
<script>
import TodoView from './TodoView.vue';
export default {
    name: 'todo-list',
    components: {
        TodoView
    },
    data() {
        return {
            total: 0
        }
    },
    computed: {
        toDoList() {
            return this.$store.getters.toDoGet;
        }
    },
    methods: {
        onDelete(key) {
            this.$store.commit('toDoDel', key)
        },
        onTotal(emit) {
            emit.event ? this.total++ : this.total--
            this.$store.commit('toDoCheak', emit.toDo)
        }
    },
}
</script>
<style lang="">
    
</style>