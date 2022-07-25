<template lang="">
    <div>
        {{ toDo }}
        <input type="checkbox" :checked='toDo.cheaked' @click='onTotal'/>
        <span>{{ toDo.text }}</span>
        <button @click="onDelete">삭제</button>
    </div>
</template>
<script>
export default {
    name: 'todo-view',
    props: {
        toDo: {
            text: String,
            key: String,
            cheaked: Boolean
        },
        delete: Function,
        cheaked: Function
    },
    methods: {
        onTotal(event) {
            this.$emit('cheaked', {
                event: event.target.checked,
                toDo: this.toDo
            })
        },
        onDelete() {
            this.$emit('delete', this.toDo.key)
        }
    },

}
</script>
<style lang="">
    
</style>