<template>
  <el-form-item :label="label">
    <el-select
      clearable
      :multiple="multiple "
      :placeholder="placeholder"
      v-model="currentValue"
      @input="onInputEvent"
    >
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "SelectInput",
  props: ["multiple", "options", "name", "label", "value", "placeholder"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>