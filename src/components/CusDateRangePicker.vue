<template>
  <el-form-item :label="label">
    <el-date-picker
      v-model="currentValue"
      :type="pickerType"
      range-separator="~"
      start-placeholder="開始日期"
      end-placeholder="结束日期"
      @change="onInputEvent"
    ></el-date-picker>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "DateRangePicker",
  props: ["name", "label", "value", "pickerType"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>