<template lang="">
    <form @submit.prevent="onSubmit">
      <input v-model='text' />
      <button>등록</button>
    </form>
</template>
<script>
export default {
    name: 'form-view',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.text === '')
                return

            this.$store.commit('toDoAdd', {
                text: this.text,
                cheaked: false,
                key: new Date(),
            })

            this.text = ''
        }
    },
}
</script>
<style lang="">
    
</style>