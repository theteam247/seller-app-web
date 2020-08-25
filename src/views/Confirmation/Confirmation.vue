<template>
  <div class="confirmation">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="17" :md="12">
        <el-card class="hidden-xs-only" :style="{ padding: '40px' }">
          <Content />
        </el-card>
        <Content class="hidden-sm-and-up" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Content from "./components/Content.vue";

@Component({
  components: {
    Content
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
