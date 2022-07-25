<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="() => userSet(user)">
      <input type='text' v-model='user.id' placeholder="아이디를 입력하세요" />
      <input type='passwd' v-model='user.password' placeholder="비밀번호를 입력하세요" />
      <button>로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    user() {
      return this.$store.getters.userGet
    }
  },
  methods: {
    userSet(user) {
      this.$store.commit('userSet')
      this.$router.push({
        name: 'about',
        params: user
      })
    }
  }
}
</script>
