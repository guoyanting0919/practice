<template>
  <div id="app">
    <div ref="pointer" class="mixBlend" :class="{'active':mixBlendHover}"></div>
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
    }
  },
  components: {
    Loading
  },
  methods: {},
  mounted() {
    document.addEventListener("mousemove", e => {
      gsap.to(".mixBlend", {
        x: e.clientX,
        y: e.clientY
        // stagger: -0.02
      });
    });
  }
};
</script>

<style lang="scss">
.mixBlend {
  width: 25px;
  height: 25px;
  transform: translate(100px, 500px);
  pointer-events: none;
  mix-blend-mode: exclusion;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 999999;
  // transition: 0.5s;
}

.mixBlend.active {
  width: 50px;
  height: 50px;
  top: -25px;
  left: -25px;
  // transition: 0.5s;
}
</style>
