<template>
  <div id="formProducer">
    <!-- header -->
    <div class="header">
      <h1>FormProducer</h1>
    </div>

    <!-- sidebar -->
    <div class="sideBar">
      <p class="sideBarTitle">CHOOSE TYPE</p>
      <div>
        <p
          @mouseover="mbMouseOver"
          @mouseleave="mbMouseLeave"
          class="sideBarItem"
          @click="inputTypeSelect=item.value"
          :class="{'active':inputTypeSelect===item.value}"
          v-for="(item, index) in inputTypeOptions"
          :key="index.value"
        >
          {{item.value}}
          <!-- <i class="far fa-hand-point-left" v-if="inputTypeSelect===item.value"></i> -->
          <i class="fas fa-arrow-left" v-if="inputTypeSelect===item.value"></i>
        </p>
        <p
          :class="{'active':inputTypeSelect===''}"
          @click="inputTypeSelect=''"
          class="sideBarItem"
          style="color:red;text-shadow: 0 0 10px red"
        >PAUSE</p>
      </div>
    </div>

    <!-- mainContainer -->
    <div class="mainContainer">
      <!-- 欄位類型選擇 -->
      <!-- <el-form class="titleLabel">
        <el-form-item label="CHOOSE TYPE">
          <el-select
            popper-class="mySelect"
            clearable
            placeholder="Choose"
            v-model="inputTypeSelect"
          >
            <el-option
              v-for="item in inputTypeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>-->

      <!-- TextInput -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='TextInput'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='TextInput'">
            <el-input clearable v-model="TextInput.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="TextInput.label" placeholder="Title"></el-input>
            <el-input clearable v-model="TextInput.width" placeholder="Width(%,px)"></el-input>
            <el-input clearable v-model="TextInput.placeholder" placeholder="Placeholder"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextInput.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextInput.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextInput.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextInput.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- TextArea -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='TextArea'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='TextArea'">
            <el-input clearable v-model="TextArea.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="TextArea.label" placeholder="Title"></el-input>
            <el-input clearable v-model="TextArea.width" placeholder="Width(%,px)"></el-input>
            <el-input clearable v-model="TextArea.placeholder" placeholder="Placeholder"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextArea.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextArea.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextArea.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TextArea.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- DatePicker -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='DatePicker'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='DatePicker'">
            <el-input clearable v-model="DatePicker.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="DatePicker.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DatePicker.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DatePicker.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DatePicker.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DatePicker.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>

            <el-select
              popper-class="mySelect"
              clearable
              v-model="DatePicker.pickerType"
              placeholder="Picker Type"
            >
              <el-option
                v-for="(item,index) in pickerOption"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- DateRangePicker -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='DateRangePicker'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='DateRangePicker'">
            <el-input clearable v-model="DateRangePicker.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="DateRangePicker.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DateRangePicker.colsLg"
              placeholder="Lg"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DateRangePicker.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DateRangePicker.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DateRangePicker.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="DateRangePicker.pickerType"
              placeholder="Picker Type"
            >
              <el-option
                v-for="(item,index) in pickerRangeOption"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- UploadFile -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='UploadFile'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='UploadFile'">
            <el-input clearable v-model="UploadFile.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="UploadFile.label" placeholder="Title"></el-input>
            <el-input clearable v-model="UploadFile.uploadUrl" placeholder="Api"></el-input>
            <el-input clearable v-model="UploadFile.btnText" placeholder="Button Name"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="UploadFile.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="UploadFile.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="UploadFile.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="UploadFile.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>

            <el-select
              popper-class="mySelect"
              clearable
              v-model="UploadFile.limit"
              placeholder="Max Upload"
            >
              <el-option v-for="(item,index) in 12" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-switch v-model="UploadFile.multiple" active-text="Multiple" inactive-text="Radio"></el-switch>
          </el-form-item>
        </transition>
      </el-form>

      <!-- CheckBox -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='CheckBox'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='CheckBox'">
            <el-input clearable v-model="CheckBox.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="CheckBox.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="CheckBox.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="CheckBox.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="CheckBox.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="CheckBox.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>

            <el-switch v-model="optionFromApiCheck" active-text="Custom" inactive-text="FromAPI"></el-switch>
            <div>
              <el-input
                v-if="optionFromApiCheck"
                clearable
                v-model="checkValue"
                placeholder="Option Value"
              ></el-input>
              <el-input
                v-if="optionFromApiCheck"
                clearable
                v-model="checkLabel"
                placeholder="Option Label"
              ></el-input>
              <el-button
                v-if="optionFromApiCheck"
                type="primary"
                @click="addCheckOption"
              >Import Option</el-button>
              <el-button
                v-if="optionFromApiCheck"
                type="danger"
                @click="cleanCheckOption"
              >Clean option</el-button>
              <el-table
                empty-text="NO DATA"
                header-cell-class-name="tableHeader"
                v-if="optionFromApiCheck"
                :data="CheckBox.options"
              >
                <el-table-column prop="value" label="value"></el-table-column>
                <el-table-column prop="label" label="label"></el-table-column>
              </el-table>
            </div>
          </el-form-item>
        </transition>
      </el-form>

      <!-- SelectOption -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='SelectOption'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='SelectOption'">
            <el-input clearable v-model="SelectOption.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="SelectOption.label" placeholder="Title"></el-input>
            <el-input clearable v-model="SelectOption.placeholder" placeholder="Placeholder"></el-input>

            <el-select
              popper-class="mySelect"
              clearable
              v-model="SelectOption.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="SelectOption.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="SelectOption.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="SelectOption.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-switch v-model="SelectOption.multiple" active-text="Multiple" inactive-text="Radio"></el-switch>
            <el-switch v-model="optionFromApiSel" active-text="Custom" inactive-text="FromAPI"></el-switch>
            <div>
              <el-input
                v-if="optionFromApiSel"
                clearable
                v-model="selValue"
                placeholder="Option Value"
              ></el-input>
              <el-input
                v-if="optionFromApiSel"
                clearable
                v-model="selLabel"
                placeholder="Option Label"
              ></el-input>
              <el-button v-if="optionFromApiSel" type="primary" @click="addSelOption">Import Option</el-button>
              <el-button v-if="optionFromApiSel" type="danger" @click="cleanSelOption">Clean Option</el-button>
              <el-table
                empty-text="NO DATA"
                header-cell-class-name="tableHeader"
                v-if="optionFromApiSel"
                :data="SelectOption.options"
              >
                <el-table-column prop="value" label="value"></el-table-column>
                <el-table-column prop="label" label="label"></el-table-column>
              </el-table>
            </div>
          </el-form-item>
        </transition>
      </el-form>

      <!-- TreeSelect -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='TreeSelect'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='TreeSelect'">
            <el-input clearable v-model="TreeSelect.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="TreeSelect.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TreeSelect.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TreeSelect.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TreeSelect.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="TreeSelect.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- RadioBtn -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='RadioBtn'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='RadioBtn'">
            <el-input clearable v-model="RadioBtn.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="RadioBtn.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="RadioBtn.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="RadioBtn.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="RadioBtn.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="RadioBtn.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>

            <el-switch v-model="optionFromApiRadio" active-text="Custom" inactive-text="FromAPI"></el-switch>
            <div>
              <el-input
                v-if="optionFromApiRadio"
                clearable
                v-model="radioValue"
                placeholder="Option Value"
              ></el-input>
              <el-input
                v-if="optionFromApiRadio"
                clearable
                v-model="radioLabel"
                placeholder="Option Label"
              ></el-input>
              <el-button
                v-if="optionFromApiRadio"
                type="primary"
                @click="addRadioOption"
              >Import Option</el-button>
              <el-button
                v-if="optionFromApiRadio"
                type="danger"
                @click="cleanRadioOption"
              >Clean Option</el-button>
              <el-table
                empty-text="NO DATA"
                header-cell-class-name="tableHeader"
                v-if="optionFromApiRadio"
                :data="RadioBtn.options"
              >
                <el-table-column prop="value" label="value"></el-table-column>
                <el-table-column prop="label" label="label"></el-table-column>
              </el-table>
            </div>
          </el-form-item>
        </transition>
      </el-form>

      <!-- Cascader -->
      <el-form class="formWidth">
        <p v-if="inputTypeSelect==='Cascader'" class="labelTitle">{{inputTypeSelect}}</p>

        <transition name="fade" mode="out-in">
          <el-form-item label v-if="inputTypeSelect==='Cascader'">
            <el-input clearable v-model="Cascader.name" placeholder="ModelName"></el-input>
            <el-input clearable v-model="Cascader.label" placeholder="Title"></el-input>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="Cascader.colsLg"
              placeholder="LG"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="Cascader.colsMd"
              placeholder="MD"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="Cascader.colsSm"
              placeholder="SM"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
            <el-select
              popper-class="mySelect"
              clearable
              v-model="Cascader.colsXs"
              placeholder="XS"
              class="colSelect"
            >
              <el-option v-for="(item,index) in 24" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </transition>
      </el-form>

      <!-- button -->
      <div class="btnsGroup" :class="{'opacityBox':!inputTypeSelect}">
        <el-button type="primary" @click="addHandler">CONFIRM</el-button>
        <el-button type="danger" @click="cleanHandler">CLEAN</el-button>
      </div>
      <!-- outputBox -->
      <div class="outputGroup" :class="{'opacityBox':!inputTypeSelect}">
        <div class="outputBox" style="width:60%">
          <div class="buffle" style="width:100%;margin:auto;">fieldsConfig</div>
          <el-button size="mini" class="copyBtn" type="danger" v-copy="outputBox">Copy</el-button>
        </div>

        <div class="outputBox" style="width:30%;height:100%">
          <el-input
            type="textarea"
            placeholder="formData"
            v-model="formData"
            style="width:100%;margin:auto;height:100%"
            autosize
          ></el-input>
          <el-button size="mini" class="copyBtn" type="danger" v-copy="formData">Copy</el-button>
        </div>
      </div>

      <div class="previewBox" :class="{'opacityBox':!inputTypeSelect}">
        <div class="rwdPreview" v-if="fieldsConfig">
          <el-row :gutter="20">
            <el-col
              v-for="(item, index) in fieldsConfig"
              :lg="item.colsLg"
              :md="item.colsMd"
              :sm="item.colsSm"
              :xs="item.colsXs"
              :key="index"
            >
              <div @click="delDiv(index)" class="previewDiv">{{item.label}}-{{item.fieldType}}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <CusForm :config="config" @submit="getFormData" v-model="formData2"></CusForm>
  </div>
</template>

<script>
import CusForm from "../components/CusForm";
export default {
  name: "FormProducer",
  components: { CusForm },
  data() {
    return {
      formData2: {},
      config: {
        fieldsConfig: [],
        buttons: {
          onSubmitText: "提交",
          onResetText: "重置"
        }
      },
      // Json
      fieldsConfig: [],

      // 欄位類型選擇
      inputTypeSelect: "",
      inputTypeOptions: [
        {
          label: "TextInput",
          value: "TextInput"
        },
        {
          label: "TextArea",
          value: "TextArea"
        },
        {
          label: "DatePicker",
          value: "DatePicker"
        },
        {
          label: "DateRangePicker",
          value: "DateRangePicker"
        },
        {
          label: "CheckBox",
          value: "CheckBox"
        },
        {
          label: "RadioBtn",
          value: "RadioBtn"
        },
        {
          label: "SelectOption",
          value: "SelectOption"
        },
        {
          label: "UploadFile",
          value: "UploadFile"
        },
        {
          label: "TreeSelect",
          value: "TreeSelect"
        },
        {
          label: "Cascader",
          value: "Cascader"
        }
      ],

      //   TextInput
      TextInput: {
        fieldType: "TextInput",
        name: "",
        label: "",
        width: "",
        placeholder: "",
        cols: ""
      },

      //   TextArea
      TextArea: {
        fieldType: "TextArea",
        name: "",
        label: "",
        width: "",
        placeholder: "",
        cols: ""
      },

      //   DatePicker
      DatePicker: {
        fieldType: "DatePicker",
        name: "",
        label: "",
        pickerType: "",
        cols: ""
      },
      pickerOption: ["year", "month", "date", "dates", "week", "datetime"],

      //   DateRangePicker
      DateRangePicker: {
        fieldType: "DateRangePicker",
        name: "",
        label: "",
        pickerType: "",
        cols: ""
      },
      pickerRangeOption: ["datetimerange", "daterange", "monthrange"],

      //   UploadFile
      UploadFile: {
        fieldType: "UploadFile",
        name: "",
        label: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        uploadUrl: "https://scan.1966.org.tw/images/Upload/Pic",
        limit: null,
        multiple: false,
        btnText: ""
      },

      //   CheckBox
      CheckBox: {
        fieldType: "CheckBox",
        name: "",
        label: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        options: []
      },
      optionFromApiCheck: false,
      checkValue: "",
      checkLabel: "",

      //   SelectOption
      SelectOption: {
        fieldType: "SelectOption",
        name: "",
        label: "",
        placeholder: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        multiple: false,
        options: []
      },
      optionFromApiSel: false,
      selValue: "",
      selLabel: "",

      //   TreeSelect
      TreeSelect: {
        fieldType: "TreeSelect",
        name: "",
        label: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        options: []
      },

      //   RadioBtn
      RadioBtn: {
        fieldType: "RadioBtn",
        name: "",
        label: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        options: []
      },
      optionFromApiRadio: false,
      radioValue: "",
      radioLabel: "",

      //   Cascader
      Cascader: {
        fieldType: "Cascader",
        name: "",
        label: "",
        colsLg: "",
        colsMd: "",
        colsSm: "",
        colsXs: "",
        options: []
      },

      // outputBox
      outputBox: "",
      formData: ""
    };
  },
  methods: {
    addHandler() {
      const vm = this;
      let flag = vm.inputTypeSelect;
      let obj = Object.assign({}, vm.$data[flag]);
      vm.fieldsConfig.push(obj);
      vm.outputBox = JSON.stringify(vm.fieldsConfig);
      console.log(vm.fieldsConfig);
      let arr = vm.fieldsConfig.map(form => {
        return { name: form.name, type: form.fieldType };
      });
      let formObj = {};
      arr.map(o => {
        if (
          o.type === "TreeSelect" ||
          o.type === "Cascader" ||
          o.type === "CheckBox"
        ) {
          formObj[o.name] = [];
        } else {
          formObj[o.name] = "";
        }
      });
      vm.formData = JSON.stringify(formObj);
      let b = vm.$baffle(".buffle");
      b.start()
        .set({ speed: 100, characters: "¯_(ツ)_/¯▐░▒▨▓▙▜" })
        .text(text => vm.outputBox)
        .reveal(1000);
      vm.config.fieldsConfig = vm.fieldsConfig;
      vm.formData2 = JSON.parse(vm.formData);
      console.log(JSON.parse(vm.formData));
      vm.$forceUpdate();
      vm.resetFun();
    },
    cleanHandler() {
      const vm = this;
      vm.fieldsConfig = [];
      vm.outputBox = "";
      vm.formData = "";
      let b = vm.$baffle(".buffle");
      b.start()
        .set({ speed: 100 })
        .text(text => "fieldsConfig")
        .reveal(1000);
    },
    resetFun() {
      const vm = this;
      const flag = vm.inputTypeSelect || "TextInput";
      for (let name in vm.$data[flag]) {
        if (name === "fieldType") {
        } else {
          console.log(typeof vm.$data[flag][name]);
          if (typeof vm.$data[flag][name] === "object") {
            vm.$data[flag][name] = [];
          } else if (typeof vm.$data[flag][name] === "number") {
            vm.$data[flag][name] = 12;
          } else if (typeof vm.$data[flag][name] === "boolean") {
            vm.$data[flag][name] = false;
          } else {
            vm.$data[flag][name] = "";
          }
        }
      }
    },
    mbMouseOver() {
      this.$store.dispatch("mixBlendHandler", true);
    },
    mbMouseLeave() {
      this.$store.dispatch("mixBlendHandler", false);
    },
    delDiv(index) {
      const vm = this;
      this.fieldsConfig.splice(index, 1);
      vm.outputBox = JSON.stringify(vm.fieldsConfig);
      let arr = vm.fieldsConfig.map(form => {
        return { name: form.name, type: form.fieldType };
      });
      let formObj = {};
      arr.map(o => {
        if (
          o.type === "TreeSelect" ||
          o.type === "Cascader" ||
          o.type === "CheckBox"
        ) {
          formObj[o.name] = [];
        } else {
          formObj[o.name] = "";
        }
      });
      vm.formData = JSON.stringify(formObj);
    },
    addCheckOption() {
      const vm = this;
      let op = {};
      op.value = vm.checkValue;
      op.label = vm.checkLabel;
      vm.CheckBox.options.push(op);
      vm.$nextTick(() => {
        vm.checkValue = "";
        vm.checkLabel = "";
      });
    },
    cleanCheckOption() {
      const vm = this;
      vm.CheckBox.options = [];
    },
    addSelOption() {
      const vm = this;
      let op = {};
      op.value = vm.selValue;
      op.label = vm.selLabel;
      vm.SelectOption.options.push(op);
      vm.$nextTick(() => {
        vm.selValue = "";
        vm.selLabel = "";
      });
    },
    cleanSelOption() {
      const vm = this;
      vm.SelectOption.options = [];
    },
    addRadioOption() {
      const vm = this;
      let op = {};
      op.value = vm.radioValue;
      op.label = vm.radioLabel;
      vm.RadioBtn.options.push(op);
      vm.$nextTick(() => {
        vm.radioValue = "";
        vm.radioLabel = "";
      });
    },
    cleanRadioOption() {
      const vm = this;
      vm.RadioBtn.options = [];
    },
    getFormData() {
      console.log(this.formData2);
    }
  },
  mounted() {
    const vm = this;
    // let b = vm.$baffle(".baffle");
    // console.log(b);
    // b.start()
    //   .set({ speed: 100 })
    //   .text(text => "Hi dad!")
    //   .reveal(1000);
  }
};
</script>

<style lang='scss' >
html {
  background: #000;
}
input {
  background: #000;
}
</style>