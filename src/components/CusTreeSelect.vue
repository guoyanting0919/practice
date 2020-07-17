<template>
  <el-form-item :label="label">
    <el-tree
      :data="options"
      show-checkbox
      node-key="Id"
      ref="tree"
      :props="defaultProps"
      @check="getCheckedKeys"
    ></el-tree>
  </el-form-item>
</template>


<script>
import formMixins from "../mixin/form-model";
export default {
  name: "SelectTree",
  props: ["multiple", "options", "name", "label", "value"],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value,
      defaultProps: {
        children: "Children",
        label: "Label"
      }
    };
  },
  methods: {
    getCheckedKeys() {
      let treeKey = this.$refs.tree.getCheckedKeys();
      //   console.log(treeKey);
      this.$emit("input", this.name, treeKey);
    }
  }
};
</script>