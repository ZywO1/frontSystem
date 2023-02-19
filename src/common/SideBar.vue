<template>
  <div class="sidebar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#242f42"
      :default-active="route.meta.name"
      text-color="#fff"
      :router="true"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              v-for="item in item.subs"
              :key="item.index"
              :index="item.index"
              >{{ item.title }}
            </el-menu-item>
          </el-sub-menu></template
        >
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const items = [
  {
    index: "/homepage",
    title: "主页",
  },
  {
    index: "/notice",
    title: "公告",
  },
  {
    index: "/mylab",
    title: "我的课程",
  },
  {
    index: "/stuManager",
    title: "学生管理",
  },
];
const router = useRouter(),
  route = useRoute();
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 249px;
  height: calc(100vh - 70px);
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
  overflow-x: hidden;
  overflow-y: auto;
}
.sidebar > ul {
  height: 100%;
}
</style>
