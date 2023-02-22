<template>
  <div class="userManager">
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size: 1.5em">
        <el-breadcrumb-item> 用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="学生管理" name="1">
        <el-table :data="userList" style="width: 100%" v-loading="loading">
          <el-table-column prop="id" label="id" width="100"></el-table-column>
          <el-table-column prop="name" label="学生姓名"></el-table-column>
          <el-table-column
            prop="username"
            label="学生学号"
            sortable
          ></el-table-column>
          <el-table-column prop="class" label="学生班级"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default="{ row }">
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="float: right; margin-top: 10px"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          background
          :page-sizes="[5, 10, 20]"
          layout="sizes, total, prev, pager, next, jumper"
        />
      </el-tab-pane>
      <el-tab-pane label="教师管理" name="2">教师管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "StudentManager",
};
</script>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getUserList } from "api/user/userInfo";
import { ElMessage } from "element-plus";
const loading = ref(false);
const activeName = ref("1");
const userList = ref([]);
//提交查询
const submitStudent = async () => {
  loading.value = true;
  getUserList(pageSize.value, currentPage.value, activeName.value)
    .then((res) => {
      userList.value = res.data.data;
      total.value = res.data.total;
      loading.value = false;
    })
    .catch((err) => {
      ElMessage({
        type: "warning",
        message: err.message || "获取信息失败",
      });
      loading.value = false;
    });
};

//分页相关
const pageSize = ref(5);
const currentPage = ref(1);
const total = ref(0);

onMounted(async () => {
  submitStudent();
});

watch([pageSize, currentPage], async () => {
  submitStudent();
});
</script>

<style scoped>
.crumbs {
  margin-bottom: 20px;
}
</style>
