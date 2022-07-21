<template>
    <div class="flexbox">
        <img :src="profile.url" />
        <div>
            <h4>{{ profile.name }}</h4>
            <ul>
                <li>나이 : {{ profile.age }}</li>
                <li>키 : {{ profile.cm }}</li>
                <li>몸무게 : {{ profile.kg }}</li>
                <li>직업 : {{ profile.job }}</li>
                <li>사는 곳 : {{ profile.local }}</li>
            </ul>
            <span v-if="isLove">{{ profile.name }}은 당신이 싫데요...@@</span>
            <button v-else @click="onClick">띵동~! 당신을 좋아해연!</button>
        </div>
    </div>

</template>
<script>
export default {
    name: 'profile-view',
    props: {
        profile: {
            type: Object,
        }
    },
    data() {
        return {
            isLove: false
        }
    },
    methods: {
        onClick: function () {
            this.isLove = true;
            this.$emit("like");
        },
    },
}
</script>
<style lang="scss">
.flexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px;

    h4 {
        font-size: 30px;
    }

    img {
        width: 400px;
        height: 400px;
    }

    div {
        margin-left: 30px;
    }
}
</style>