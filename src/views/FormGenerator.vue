<template>
  <div>
    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="80%" center>
      <CusForm :config="config" @submit="getFormData" v-model="formData"></CusForm>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <CusForm :config="config" @submit="getFormData" v-model="formData"></CusForm>

    <!-- <button @click="getFormData">getFormData</button>
    <button @click="reset">reset</button>-->
  </div>
</template>
<script>
import CusForm from "../components/CusForm";
export default {
  name: "FormGeneratorDemo",
  components: { CusForm },
  created() {
    // this.queryOrderType();
    // this.queryAreaTree();
  },
  data() {
    return {
      centerDialogVisible: false,
      formData: { monStsrt: "", monEnd: "" },
      config: {
        fieldsConfig: [
          {
            fieldType: "SelectOption",
            name: "monStsrt",
            label: "周一",
            placeholder: "開始時間",
            colsLg: 12,
            colsMd: 12,
            colsSm: 12,
            colsXs: 12,
            multiple: false,
            options: [
              { value: "10:00", label: "10:00" },
              { value: "11:00", label: "11:00" }
            ]
          },
          {
            fieldType: "SelectOption",
            name: "monEnd",
            label: "~",
            placeholder: "monEnd",
            colsLg: 12,
            colsMd: 12,
            colsSm: 12,
            colsXs: 12,
            multiple: false,
            options: [{ value: "15:00", label: "15:00" }]
          }
        ],
        buttons: {
          onSubmitText: "提交",
          onResetText: "重置"
        }
      }
    };
  },
  methods: {
    getFormData() {
      console.log(this.formData);
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
    },
    queryOrderType() {
      setTimeout(() => {
        this.config.fieldsConfig[0].options = [
          { label: "select1", value: "key1" },
          { label: "select2", value: "key2" },
          { label: "select3", value: "key3" }
        ];
      }, 100);
    }
    // getOrgTree() {
    //   const vm = this;
    //   vm.$api.GetOrgTree().then(res => {
    //     vm.config.fieldsConfig[0].options = res.data;
    //   });
    // }
  },
  mounted() {
    // this.getOrgTree();
  }
};
</script>