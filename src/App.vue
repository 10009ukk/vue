<template>
  <div class="title">
    <h1>좋아하면 울리는... {{ total }}</h1>

    <!-- v-bind 는 기본적인 문자열을 data 로 인식하게 도와주는 것 -->
    <!-- <input type='text' value="value" /> -->
    <input type='text' v-bind:value="value" />
    <!-- img 의 src 연결이나 class 바인딩도 전부 마찬가지 -->
    <a :href='href'>NAVER</a>

  </div>
  <ul>
    <li v-for="(profile, index) in profiles" :key="index">
      <!-- 
        profile-view 에서 profile='' 을 사용하면 props 가 전달되는 건 맞음
        그러나 v-bind 를 사용하지 않을 경우 문자열 그대로가 전달됨
        <profile-view profile="profile" @like='onTotal' />

        정적으로 보내려면 { name : 정아로, age: 19 ...} 할 수도 있음
        그러나 data 내에 profiles 를 사용하려면 v-bind 이 필수임
      -->
      <profile-view :profile="profile" @like="onTotal"></profile-view>
    </li>
  </ul>
</template>

<script>

import ProfileView from "./components/ProfileView.vue"

export default {
  name: "App",
  components: {
    ProfileView,
  },
  data() {
    return {
      value: '검색어를 입력하세요...',
      href: 'https://naver.com',
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
