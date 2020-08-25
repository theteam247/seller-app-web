<template>
  <div class="header">
    <el-row>
      <el-col class="desktop hidden-xs-only">
        <el-card shadow="none">
          <a href="/">
            <img src="@/assets/logo.png" />
          </a>
        </el-card>
      </el-col>
      <el-col class="mobile hidden-sm-and-up">
        <el-card shadow="always">
          <a href="/">
            <img src="@/assets/logo.png" />
          </a>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  .desktop {
    .el-card__body {
      display: flex;
    }
  }
}
</style>

<style scoped lang="scss"></style>
