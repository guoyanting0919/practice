<template>
  <div id="app">
    <div ref="pointer" class="mixBlend" :class="{'active':mixBlendHover}">
      <div class="mbLoading" v-if="isLoading"></div>
      <!-- <div class="mbClick" v-if="mixBlendHover">CLICK</div> -->
    </div>
    <loading :active.sync="isLoading"></loading>
    <router-view />
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    mixBlendHover() {
      return this.$store.state.mixBlendHover;
    },
  },
  components: {
    Loading,
  },
  methods: {},
  mounted() {
    document.addEventListener("mousemove", (e) => {
      // console.log(e);
      gsap.to(".mixBlend", {
        x: e.clientX,
        y: e.pageY,
        // stagger: -0.02
      });
    });
  },
};
</script>

<style lang="scss">
.mixBlend {
  width: 15px;
  height: 15px;
  pointer-events: none;
  mix-blend-mode: exclusion;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -7.5px;
  left: -7.5px;
  z-index: 999999;
  transition: width 0.5s, height 0.5s, top 0.5s, left 0.5s;
}
.mbClick {
  font-size: 10px !important;
  color: red;
}
.mbLoading {
  width: 50px;
  height: 50px;
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 9999999;
  background-image: linear-gradient(45deg, transparent, transparent 40%, #fff);
  animation: loaderAni 1s linear infinite;

  &::after {
    content: "";
    width: 40px;
    height: 40px;
    background: #000;
    position: absolute;
    border-radius: 50%;
    top: 5px;
    right: 5px;
  }
}

.mixBlend.active {
  width: 50px;
  height: 50px;
  top: -25px;
  left: -25px;
  position: absolute;
  // transition: height 0.5s;

  .mbLoading {
    opacity: 0;
  }
}

@keyframes loaderAni {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
