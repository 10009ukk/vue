<template>
  <h1 class="title">좋아하면 울리는... {{ total }}</h1>
  <ul>
    <li v-for="(profile, index) in profiles" :key="index">
      <profile-view v-bind:profile="profile" @like='onTotal' />
    </li>
  </ul>
</template>

<script>

import ProfileView from "./components/ProfileView.vue"

export default {
  name: "App",
  components: {
    ProfileView
  },
  data() {
    return {
      total: 0,
      profiles: [{
        name: '이슬이',
        age: 19,
        cm: 160,
        kg: '45kg',
        job: '프리랜서',
        local: '마산',
        url: 'https://i.ytimg.com/vi/Lt9YHwaIJFM/hq2.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBNl786ExsN2SsTIymK870oBfscCw'
      }, {
        name: '염정아로',
        age: 24,
        cm: 172,
        kg: '45kg',
        job: '카페 운영',
        local: '평촌',
        url: 'http://dimg.donga.com/egc/CDB/SHINDONGA/Article/20/05/08/16/200508160500004_1.jpg'
      }, {
        name: '함자영',
        age: 29,
        cm: 155,
        kg: '48kg',
        job: '대학생',
        local: '서울',
        url: 'https://pbs.twimg.com/profile_images/1142328479993626624/L6xGZglf_400x400.jpg'
      }]
    };
  },
  methods: {
    onTotal: function () {
      this.total++;
    },
  },
};
</script>

<style lang="scss">
ul {
  padding: 0;
  list-style: none;
}

.title {
  text-align: center;

}
</style>
