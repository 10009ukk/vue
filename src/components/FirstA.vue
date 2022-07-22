<template lang="">
    <div>
        This is A View
        {{ count }}
    </div>
    <button @click="plus">plus</button>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'first-a',
    computed: mapState({
        // 많은 state 를 가져올 경우 mapState 라는 Helper 를 사용함
        count: state => state.count
    }),
    // count() {
    //     return this.$store.state.count
    // }

    methods: {
        plus() {
            this.$store.state.count++
        }
    },
}
</script>

<style lang="">
    
</style>