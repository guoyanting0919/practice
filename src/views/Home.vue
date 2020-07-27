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

    <!-- navBar -->
    <!-- <div class="navBar">
      <p data-text="疫">防</p>
      <p data-text="款">捐</p>
      <p data-text="育">教</p>
      <p data-text="政">行</p>
      <p data-text="生">招</p>
    </div>-->

    <!-- !qaz@WSX -->
    <!-- <div class="!qaz@WSX">
      <div class="circle"></div>
    </div>-->

    <!--  -->
    <div class="colorCircle">
      <div class="fan" style="--bgColor:#408079;--roateDeg:0deg"></div>
      <div class="fan" style="--bgColor:#6b8e75;--roateDeg:-15deg"></div>
      <div class="fan" style="--bgColor:#95c46f;--roateDeg:-30deg"></div>
      <div class="fan" style="--bgColor:#93ab62;--roateDeg:-60deg"></div>
      <div class="fan" style="--bgColor:#999b5b;--roateDeg:-45deg"></div>
      <div class="fan" style="--bgColor:#77a093;--roateDeg:-75deg"></div>

      <div class="fan" style="--bgColor:#004c64;--roateDeg:-90deg"></div>
      <div class="fan" style="--bgColor:#3e657b;--roateDeg:-105deg"></div>
      <div class="fan" style="--bgColor:#465b78;--roateDeg:-120deg"></div>
      <div class="fan" style="--bgColor:#66606b;--roateDeg:-135deg"></div>
      <div class="fan" style="--bgColor:#808080;--roateDeg:-150deg"></div>
      <div class="fan" style="--bgColor:#999999;--roateDeg:-165deg"></div>

      <div class="fan" style="--bgColor:#998675;--roateDeg:-180deg"></div>
      <div class="fan" style="--bgColor:#916a6a;--roateDeg:-195deg"></div>
      <div class="fan" style="--bgColor:#865150;--roateDeg:-210deg"></div>
      <div class="fan" style="--bgColor:#783141;--roateDeg:-225deg"></div>
      <div class="fan" style="--bgColor:#944340;--roateDeg:-240deg"></div>
      <div class="fan" style="--bgColor:#534741;--roateDeg:-255deg"></div>

      <div class="fan" style="--bgColor:#736357;--roateDeg:-270deg"></div>
      <div class="fan" style="--bgColor:#998675;--roateDeg:-285deg"></div>
      <div class="fan" style="--bgColor:#c4ad96;--roateDeg:-300deg"></div>
      <div class="fan" style="--bgColor:#c4a860;--roateDeg:-315deg"></div>
      <div class="fan" style="--bgColor:#eacb60;--roateDeg:-330deg"></div>
      <div class="fan" style="--bgColor:#c69c6d;--roateDeg:-345deg"></div>

      <!-- <div class="fan black"></div> -->
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
.colorCircle {
  margin-right: 1rem;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  position: relative;
  border: 2px solid #fff;

  .fan {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-origin: 200px 200px;
    background-color: var(--bgColor);
    transform: rotate(var(--roateDeg));

    // &:hover {
    //   box-shadow: 5px 5px 1px #000;
    //   transform: translate(4px, 4px);
    // }

    &.black {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 200px 300px 0;
      border-color: transparent transparent black transparent;
      right: 25%;
      top: 0%;
      transform: rotate(90deg);
    }
  }
}
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
