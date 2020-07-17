<template>
  <el-form-item :label="label">
    <el-cascader
      :placeholder="placeholder"
      :show-all-levels="showAllLevels"
      :options="options"
      :props="{ checkStrictly: true }"
      clearable
      filterable
      @change="onInputEvent"
      v-model="currentValue"
    ></el-cascader>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "Cascader",
  props: ["options", "name", "label", "value", "placeholder", "showAllLevels"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>