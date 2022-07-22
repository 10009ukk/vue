<template lang="">
    <div>
        This is B View
        {{ count }}
    </div>
    <button @click="increaseCnt">+</button>
</template>
<script>
export default {
    name: 'first-b',
    computed: {
        //mapGetters
        count() {
            return this.$store.getters.increaseCount;
        }
    },
    methods: {
        increaseCnt() {
            this.$store.commit('addCounter');
        }
    },
}
</script>

<style lang="">
    
</style>