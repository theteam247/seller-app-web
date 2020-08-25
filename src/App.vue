<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/containers/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  background: url("./assets/background.png") no-repeat fixed center bottom /
    100%;
}

.el-header {
  padding: 0;
  z-index: 1;
}
.el-main {
  margin: 10px 0;
}
.el-card {
  border: none;
}
</style>
