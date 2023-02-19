<template>
  <div class="mylab">
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size: 1.5em">
        <el-breadcrumb-item> 我的课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane
        v-for="item in lesson"
        :label="item.courseName"
        :key="item.courseId"
      ></el-tab-pane>
      <el-table
        :data="labList"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column
          prop="jobName"
          label="作业"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="startTime"
          label="开始日期"
          sortable
        ></el-table-column>
        <el-table-column
          prop="deadline"
          label="截止日期"
          sortable
        ></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">提交</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MyLab",
};
</script>
<script setup>
const lesson = [
  {
    courseId: "214332",
    courseName: "python",
  },
  {
    courseId: "34534",
    courseName: "java",
  },
];
</script>

<style scoped>
.crumbs {
  margin-bottom: 20px;
}
</style>
