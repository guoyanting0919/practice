<template>
  <el-form-item :label="label" :for="name">
    <el-input
      type="text"
      :name="name"
      :id="name"
      clearable
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
  name: "TextInput",
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