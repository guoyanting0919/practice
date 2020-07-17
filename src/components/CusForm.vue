<template>
  <div>
    <el-form
      label-width="125px"
      :inline="true"
      ref="form"
      :model="formData"
      class="demo-form-inline"
    >
      <el-col
        :lg="field.colsLg"
        :md="field.colsMd"
        :sm="field.colsSm"
        :xs="field.colsXs"
        v-for="(field, index) in config.fieldsConfig"
        v-bind:key="index"
      >
        <component
          :key="index"
          :is="field.fieldType"
          :label="field.label"
          :value="formData[field.name]"
          :multiple="field.multiple"
          :data="field.data"
          @input="updateForm"
          v-bind="field"
          :options="field.options"
          :pickerType="field.pickerType"
          :uploadUrl="field.uploadUrl"
          :limit="field.limit"
          :btnText="field.btnText"
          :ref="field.name"
          :showAllLevels="field.showAllLevels"
        ></component>
      </el-col>
      <!-- <slot name="buttons"></slot> -->
      <el-col :span="24">
        <el-button type="primary" @click="submit" size="small">{{onSubmitText}}</el-button>
        <el-button type="danger" @click="reset" size="small">{{onResetText}}</el-button>
      </el-col>
    </el-form>
  </div>
</template>
<script>
//  import SelectList from './basicComponent/SelectList'
import TextInput from "@/components/CusTextInput";
import TextArea from "@/components/CusTextArea";
import SelectOption from "@/components/CusSelectOption";
import RadioBtn from "@/components/CusRadioBtn";
import DatePicker from "@/components/CusDatePicker";
import DateRangePicker from "@/components/CusDateRangePicker";
import UploadFile from "@/components/CusUploadFile";
import CheckBox from "@/components/CusCheckBox";
import TreeSelect from "@/components/CusTreeSelect";
import Cascader from "@/components/CusCascader";
export default {
  name: "FormGenerator",
  components: {
    TextInput,
    TextArea,
    SelectOption,
    RadioBtn,
    DatePicker,
    DateRangePicker,
    UploadFile,
    CheckBox,
    TreeSelect,
    Cascader
  },
  props: ["config", "value"],
  data() {
    return {
      formData: this.value,
      onSubmitText: this.config.buttons.onSubmitText || "提交",
      onResetText: this.config.buttons.onResetText || "重置"
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.formData[fieldName] = value;
      this.$forceUpdate();
    },
    submit() {
      this.$emit("submit");
    },
    reset() {
      const vm = this;
      // console.log(typeof this.formData[name]);
      // this.$refs.org[0].$refs.tree.setCheckedKeys([]);

      for (let name in vm.formData) {
        console.log(typeof vm.formData[name], name);
        if (
          typeof vm.formData[name] == "string" ||
          typeof vm.formData[name] == "number"
        ) {
          vm.formData[name] = "";
        } else {
          let flag = vm.config.fieldsConfig.filter(item => {
            return item.fieldType === "CheckBox";
          });
          console.log(flag);
          let names = flag.map(CheckBox => {
            return CheckBox.name;
          });

          if (names.includes(name)) {
            vm.formData[name] = [];
          } else {
            vm.formData[name] = null;
          }
        }
      }
    }
  },
  mounted() {
    console.log(this.$props.value);
  }
};
</script>
<style lang="scss">
// .el-input {
//   width: 100%;
// }
.el-form--inline .el-form-item {
  width: 99%;
}
.el-form--inline .el-form-item__content {
  width: calc(100% - 125px);
}
</style>