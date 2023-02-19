<template>
  <div class="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<script setup>
import Header from "common/Header.vue";
import Sidebar from "common/SideBar.vue";
</script>

<style scoped>
.content {
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  width: auto;
  padding: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
