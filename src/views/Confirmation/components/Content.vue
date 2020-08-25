<template>
  <div class="content">
    <el-row type="flex" justify="center">
      <img src="@/assets/plane.png" />
    </el-row>
    <h1>
      Thank you for applying to become a seller with Creative Market!
    </h1>
    <p>
      Our curators are reviewing your application. We'll get back to you within
      <b>5-7 business days</b>. Meanwhile, you alrady have access to your Shop
      Studio, so let's start setting up your shop!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {}
</script>

<style scoped lang="scss">
.content {
  text-align: center;
}
</style>
