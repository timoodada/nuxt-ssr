<template>
  <div class="container">
    <div v-for="(v, k) in list" :key="k">{{ v.aab004 }}</div>
    <el-button type="primary" @click="getList()">刷新</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
function getList() {
  return this.$axios.$get('/mock-data/list.json');
}
export default {
  async asyncData(ctx) {
    const list = await getList.call(ctx);
    return { list };
  },
  data() {
    return {
      list: [],
    };
  },
  head() {
    return {
      title: this.list.length ? this.list[0].aab004 : 'Nuxt',
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.list.length ? this.list[0].projectIntroduction : 'Nuxt',
      }],
    };
  },
  computed: {
    ...mapGetters([
      'userStatus',
    ]),
  },
  mounted() {},
  methods: {
    async getList() {
      try {
        this.list = await getList.call(this);
      } catch (e) {}
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  text-align: center;
}
</style>
