<template>
  <el-form-item :label="label">
    <el-upload
      ref="upload"
      class="upload-demo"
      :multiple="multiple"
      :action="uploadUrl"
      list-type="text"
      :headers="uploadHeader"
      :auto-upload="true"
      :limit="limit"
      :on-success="successUpload"
    >
      <el-button size="small" type="primary">{{btnText}}</el-button>
    </el-upload>
  </el-form-item>
</template>

<script>
import formMixins from "../mixin/form-model";
export default {
  name: "UploadFile",
  props: [
    "name",
    "label",
    "value",
    "uploadUrl",
    "multiple",
    "limit",
    "btnText"
  ],
  mixins: [formMixins],
  data() {
    return {
      currentValue: this.value,
      uploadHeader: {
        Authorization: `Bearer ${window.localStorage.getItem("Token")}`
      }
    };
  },
  methods: {
    successUpload(response) {
      this.$emit("input", this.name, response.url);
    }
  }
};
</script>