<template>
  <el-form-item :label="label" :for="name">
    <el-input
      type="textarea"
      :name="name"
      :id="name"
      autosize
      :value="currentValue"
      @input="onInputEvent"
      :placeholder="placeholder"
      :style="{ width: width }"
    ></el-input>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "TextAreaInput",
  props: ["placeholder", "label", "name", "value", "width"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>


<style scoped>
</style>