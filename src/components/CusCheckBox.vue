<template>
  <el-form-item :label="label">
    <el-checkbox-group v-model="currentValue" @change="onInputEvent">
      <el-checkbox v-for="item in options" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
    </el-checkbox-group>
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