<template>
  <div class="form">
    <el-row type="flex" justify="space-between" align="center" class="caption">
      <span>SELLER APPLICATION</span>
      <span>STEP {{ step }} OF 2</span>
    </el-row>
    <el-form ref="form" :model="form">
      <div v-if="step === 1">
        <h1 class="header">
          Share your work with us
        </h1>
        <p class="sub-header">
          To ensure the qulity of our marketplace, we limit our seller community
          to the most qualified creators. Let our curators know why you'd be a
          great seller;
        </p>
        <el-row :gutter="20">
          <el-col :xs="24" :md="12">
            <el-form-item>
              <label>
                <b>First Name</b>
              </label>
              <el-input v-model="form.first_name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :md="12">
            <el-form-item>
              <label>
                <b>Last Name</b>
              </label>
              <el-input v-model="form.last_name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <label>
            <b>Your Shop Category</b>
          </label>
          <el-select
            placeholder="Select Category"
            v-model="form.shop_category"
            :style="{ width: '100%' }"
            popper-class="form-popper"
          >
            <el-option
              v-for="(item, index) in [
                'Photos',
                'Graphics',
                'Themes',
                'Fonts',
                'Add-Ons',
                '3D'
              ]"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>
            <b>Portfolio Link</b>
          </label>
          <el-input v-model="form.portfolio_link"></el-input>
          <el-checkbox v-if="form.portfolio_link" checked
            >Yes, I confirm that the content I submit is authored by
            me.</el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <label>
            <b>Do you already have an online store?</b>
          </label>
          <div>
            <el-radio-group v-model="form.has_online_shop">
              <el-radio :label="true">Yes</el-radio>
              <el-radio :label="false">No</el-radio>
            </el-radio-group>
          </div>
        </el-form-item>
        <el-form-item v-if="form.has_online_shop">
          <label>
            <b>Online stores I sell on today</b>
          </label>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="Enter urls"
            v-model="form.online_shop_url"
          ></el-input>
        </el-form-item>
        <el-row type="flex" justify="end" align="center">
          <el-button type="primary" @click="step = step + 1">
            Next
          </el-button>
        </el-row>
      </div>
      <div v-if="step === 2">
        <p class="header">
          Tell us a little about yourself
        </p>
        <h4>
          Your answers will help us proide you with a more personalized
          experience as a seller!
        </h4>
        <el-form-item>
          <label>
            <b
              >When creating products, which best describes your perspective on
              quality?</b
            >
          </label>
          <el-select
            placeholder="Select Answer"
            v-model="form.question_1_answer"
            :style="{ width: '100%' }"
            popper-class="form-popper"
          >
            <el-option
              v-for="(item, index) in [
                'I don\'t care what it takes, my products are the highest quality possible',
                'I put in enough effort to make my product pretty high quality, but at some point my time is better spent elsewhere',
                'I try to get quality products out quickly, even if I need to take a shortcut now and then',
                'I spend the minimum amount of time & effort it takes to create products that art acceptable quality.',
                'Quantity is more important to me than quality.'
              ]"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>
            <b
              >How would you describe your experience level as an online
              seller?</b
            >
          </label>
          <el-select
            placeholder="Select Answer"
            v-model="form.question_2_answer"
            :style="{ width: '100%' }"
            popper-class="form-popper"
          >
            <el-option
              v-for="(item, index) in [
                'I sell on multiple marketplaces and through my own website',
                'I have experience selling through only my own website',
                'I have experience selling through multiple marketplaces',
                'I have experience selling through one online marketplace',
                'I\'m new to selling creative products online'
              ]"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <label>
            <b
              >How would you describe your understanding of business and
              marketing?</b
            >
          </label>
          <el-select
            placeholder="Select Answer"
            v-model="form.question_3_answer"
            :style="{ width: '100%' }"
            popper-class="form-popper"
          >
            <el-option
              v-for="(item, index) in [
                'I have an extensive background in business and/or marketing',
                'I\'m familiar with some skills & techniques, but I\'m not sure how to apply them when selling my creative work',
                'I\'m vaguely aware of basic business & marketing concepts',
                'I\'m not interested in understanding business & marketing'
              ]"
              :key="index"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-row
          type="flex"
          justify="space-between"
          align="center"
          :style="{ 'flex-wrap': 'wrap' }"
        >
          <el-button
            type="text"
            icon="el-icon-arrow-left"
            @click="step = step - 1"
          >
            Back
          </el-button>
          <el-button type="primary" @click="submit">
            Submit Application
          </el-button>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  @Emit("onSubmit")
  submit() {
    return this.form;
  }

  step = 1;
  form = {
    first_name: "",
    last_name: "",
    shop_category: "",
    portfolio_link: "",
    has_online_shop: false,
    online_shop_url: "",
    question_1_answer: "",
    question_2_answer: "",
    question_3_answer: ""
  };
}
</script>

<style lang="scss">
.form-popper {
  .el-select-dropdown__item {
    height: initial;
    white-space: initial;
    line-height: initial;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>

<style scoped lang="scss">
.form {
  .caption {
    font-size: 12px;
  }
  .header {
    font-size: 30px;
  }
  .sub-header {
    font-size: 18px;
  }
}
</style>
