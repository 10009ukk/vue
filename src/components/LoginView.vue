<template lang="">
    <template v-if="user.isLogin">
      <h1>로그인에 성공했습니다!</h1>
      {{ user }}
    </template>
    <template v-else>
        <form @submit.prevent="userSet">
            <input type='text' v-model='user.id' placeholder="아이디를 입력하세요" />
            <input type='passwd' v-model='user.password' placeholder="비밀번호를 입력하세요" />
            <button>로그인</button>
        </form>
    </template>
</template>
<script>
export default {
    name: 'login-view',
    computed: {
        user() {
            return this.$store.getters.userGet
        }
    },
    methods: {
        userSet() {
            this.$store.commit('userSet')
        }
    },
}
</script>
<style lang="scss">
</style>