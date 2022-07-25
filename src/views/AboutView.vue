<template>
  <div class="about">
    로그인을 환영합니다^^
    <h1>id: {{ id }}</h1>
    <h1>password: {{ password }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
  },
  created() {
    console.log(this.$route.params.id)
    if (this.$route.params.id === undefined) {
      this.$router.push('/')
    }

  },
}
</script>
