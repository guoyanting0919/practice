<template>
  <div id="home">
    <div v-if="r">
      <div
        class="link"
        @click="routerChange(item.name)"
        v-for="(item, index) in r"
        :key="index"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      r: []
    };
  },
  computed: {},
  methods: {
    routerChange(n) {
      this.$router.push({ name: n });
    }
  },
  created() {},
  mounted() {
    this.r = this.$router.options.routes;
  }
};
</script>
<style lang="scss" scoped>
.link {
  margin: 1rem;
  cursor: pointer;
}
</style>
