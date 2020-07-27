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
    <div class="navBar">
      <p data-text="疫">防</p>
      <p data-text="款">捐</p>
      <p data-text="育">教</p>
      <p data-text="政">行</p>
      <p data-text="生">招</p>
    </div>
    <div class="outlineBox">
      <div class="circle"></div>
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
      r: [],
    };
  },
  computed: {},
  methods: {
    routerChange(n) {
      this.$router.push({ name: n });
    },
  },
  created() {},
  mounted() {
    this.r = this.$router.options.routes;
    console.log(gsap);
  },
};
</script>
<style lang="scss" scoped>
#home {
  background: #000;
}
.link {
  margin: 1rem;
  cursor: pointer;
  color: #fff;
}
.navBar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;

  p {
    margin: 1rem;
    font-size: 2rem;
    font-weight: 700;
    position: relative;
    transition: 0.5s;

    &::after {
      content: attr(data-text);
      font-size: 2rem;
      position: absolute;
      top: 0;
      background-image: linear-gradient(to right top, #53e5ff, #ff4de1);
      background-clip: text;
      color: transparent;
      font-weight: 700;
      transition: 0.5s;
      left: 0;
      opacity: 0;
    }

    &:hover {
      color: transparent;

      &::after {
        opacity: 1;
      }
    }
  }
}
.outlineBox {
  width: 200px;
  height: 200px;
  // background: linear-gradient(to right top, #53e5ff, #ff4de1);
  background: #000;
  margin-left: 50%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 9px dashed transparent;
  // outline-offset: 0rem;
  transition: 0.5s;
  overflow: hidden;
  animation: circleAni 10s ease 0s infinite;
  position: relative;
  display: flow-root;

  .circle {
    width: 190px;
    height: 190px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
  }

  // &:hover {
  //   outline-offset: 99rem;
  //   outline: 9px dashed #000;
  // }
}

@keyframes circleAni {
  0% {
    width: 200px;
    height: 200px;
  }
  50% {
    width: 0px;
    height: 200px;
  }
  100% {
    width: 200px;
    height: 200px;
  }
}
</style>
