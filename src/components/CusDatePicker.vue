<template>
  <el-form-item :label="label">
    <el-date-picker v-model="currentValue" :type="pickerType" @change="onInputEvent"></el-date-picker>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "DatePicker",
  props: ["name", "label", "value", "pickerType"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>