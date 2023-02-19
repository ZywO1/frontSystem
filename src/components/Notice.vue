<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size: 1.5em">
        <el-breadcrumb-item> 公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-card class="box-card" v-for="item in notify" :key="item.id">
        <template #header>
          <div class="card-header">
            <span>{{ item.title }}</span>
            <div style="float: right; margin-top: -5px;">
              发布人：{{ item.username }}
            </div>
          </div>
        </template>
        <div class="noty-content">
          {{ item.content }}
        </div>
        <div class="card-foot">
          <div class="noty-time">发布时间：{{ item.time }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notice",
};
</script>
<script setup>
const notify = [
  {
    id: 0,
    title: "今天不上课",
    content: "由于机房爆炸导致网络原因。。。。。。。。",
    username: "FCJ",
    time: "2017-12-12",
  },
  {
    id: 1,
    title: "今天不上课",
    content: "由于机房爆炸导致网络原因。。。。。。。。",
    username: "FCJ",
    time: "2017-12-12",
  },
];
</script>

<style scoped>
.crumbs{
    margin-bottom: 20px;
}
.box-card {
  margin-bottom: 10px;
}

.card-foot {
  text-align: right;
}
</style>
