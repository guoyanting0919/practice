<template>
  <el-form-item :label="label">
    <el-radio-group v-model="currentValue" @change="onInputEvent">
      <el-radio v-for="item in options" :key="item.value" :label="item.value">{{item.label}}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "RadioBtn",
  props: ["options", "name", "label", "value"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value
    };
  }
};
</script>