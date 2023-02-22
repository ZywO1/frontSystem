<template>
  <div class="mylab">
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size: 1.5em">
        <el-breadcrumb-item> 我的课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs type="border-card">
      <el-table :data="myLab" style="width: 100%" v-loading="loading">
        <el-table-column
          prop="lessonName"
          label="课程名称"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="startTime"
          label="开始日期"
          sortable
        ></el-table-column>
        <el-table-column
          prop="endTime"
          label="截止日期"
          sortable
        ></el-table-column>
        <el-table-column prop="teacher" label="指导老师"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">提交</el-button>
            <el-button type="text" size="small">修改</el-button>
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
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MyLab",
};
</script>
<script setup>
import { onMounted, ref, watch } from "vue";
import { getMyLab } from "api/user/user";
import { ElMessage } from "element-plus";

const myLab = ref([]);
const loading = ref(false);
//提交查询
const submit = async () => {
  loading.value = true;
  getMyLab(currentPage.value, pageSize.value)
    .then((res) => {
      myLab.value = res.data.data;
      total.value = res.data.total;
      loading.value = false;
    })
    .catch((err) => {
      ElMessage({
        type: "warning",
        message: err.message || "用户名或密码错误",
      });
      loading.value = false;
    });
};

//分页相关
const pageSize = ref(5);
const currentPage = ref(1);
const total = ref(0);
watch([pageSize, currentPage], async () => {
  submit();
});

onMounted(async () => {
  submit();
});
</script>

<style scoped>
.crumbs {
  margin-bottom: 20px;
}
</style>
