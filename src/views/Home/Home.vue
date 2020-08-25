<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="17" :md="12">
      <el-card class="hidden-xs-only" :style="{ padding: '20px' }">
        <Form
          @onSubmit="onSubmit"
          v-loading.fullscreen.lock="fullscreenLoading"
        />
      </el-card>
      <Form
        class="hidden-sm-and-up"
        @onSubmit="onSubmit"
        v-loading.fullscreen.lock="fullscreenLoading"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import request from "@/utils/request";
import Form from "./components/Form.vue";

@Component({
  components: {
    Form
  }
})
export default class Home extends Vue {
  fullscreenLoading = false;

  async onSubmit(form: {}) {
    this.fullscreenLoading = true;
    const res = await request.post("/applications", form);
    this.fullscreenLoading = false;

    if (res.data.success) {
      this.$router.push("/confirmation");
    }
  }
}
</script>

<style scoped lang="scss"></style>
