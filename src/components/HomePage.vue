<template>
  <div>
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in pics" :key="item">
        <img :src="item" class="pics" />
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <el-row :gutter="300">
        <el-col :span="4">
          <img
            src="../assets/logo.png"
            style="width: 200px; height: 200px; padding: 20px; text-indent: 0"
          />
        </el-col>
        <el-col :span="18">
          <p>
            武汉理工大学（Wuhan University of
            Technology），简称武理工，位于武汉市，是中华人民共和国教育部直属全国重点大学，国家“双一流”建设高校
            ，“211工程”、“985工程优势学科创新平台”建设高校，由教育部和交通运输部、国家国防科技工业局、湖北省人民政府共建
            ，入选“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目、中国政府奖学金来华留学生接收院校、国家大学生文化素质教育基地。
          </p>
        </el-col>
      </el-row>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<script setup>
import { reactive } from "vue";
const pics = reactive([
  "https://img1.baidu.com/it/u=1178706402,818285308&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=385",
  "https://img0.baidu.com/it/u=1960757380,2577165063&fm=253&fmt=auto&app=138&f=PNG?w=850&h=440",
  "https://img1.baidu.com/it/u=4271877702,4147594696&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=400",
]);
</script>
<style scoped>
.box-card {
  text-indent: 2rem;
  font-size: large;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

}
.pics {
  height: 300px;
  width: 100%;
  box-shadow: #475669;
  border-radius: 10px;
}

</style>
