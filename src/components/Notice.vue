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
            <div style="float: right; margin-top: -5px">
              发布人：{{ item.publisher }}
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
import { onMounted, ref } from "vue";
import { getNotice } from "api/user/user";
import { ElMessage } from "element-plus";
let notify = ref([]);

onMounted(async () => {
  getNotice()
    .then((res) => {
      console.log(res);
      notify.value = res.data;
    })
    .catch((err) => {
      ElMessage({
        type: "warning",
        message: err.message || "用户名或密码错误",
      });
    });
});
</script>

<style scoped>
.crumbs {
  margin-bottom: 20px;
}
.box-card {
  margin-bottom: 10px;
}

.card-foot {
  text-align: right;
}
</style>
