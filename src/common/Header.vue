<template>
  <div class="header">
    <div class="logo">实验管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img class="user-logo" /> {{ name }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changepwd">修改密码</el-dropdown-item>
            <el-dropdown-item @click="quitLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-dialog
      :close-on-click-modal="true"
      :modelValue="visible"
      title="修改密码"
      @close="closeMethod"
      width="40%"
    >
      <el-form label-width="120px" :model="form">
        <el-form-item label=" 当前密码 ">
          <el-input v-model="form.oldpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="新密码 ">
          <el-input v-model="form.newpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确认</el-button>
          <el-button
            type="danger"
            @click="(visible = false), (form.oldpwd = ''), (form.newpwd = '')"
            >取消</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { detailInfo, updatepwd } from "api/user/user";
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
const name = ref("");
onMounted(async () => {
  detailInfo()
    .then((res) => {
      name.value = res.data.name;
    })
    .catch((err) => {
      console.log(err);
      ElMessage({
        type: "warning",
        message: err.message || "用户未登录",
      });
    });
});

//修改密码
const visible = ref(false);
const form = ref({
  oldpwd: "",
  newpwd: "",
});
const changepwd = () => {
  visible.value = true;
};
const closeMethod = () => {
  visible.value = false;
};
const submit = async () => {
  updatepwd(form.value.oldpwd, form.value.newpwd)
    .then((res) => {
      ElMessage({
        type: "success",
        message: "修改成功",
      });
      form.value.oldpwd = "";
      form.value.newpwd = "";
      visible.value = false;
    })
    .catch((err) => {
      console.log(err);
      ElMessage({
        type: "warning",
        message: err.message || "修改密码失败",
      });
    });
};
//退出登录
const quitLogin = () =>{
  localStorage.removeItem("token")
  window.location.href = "../login";
}

</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  background-color: #2e363f;
}

.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  line-height: 70px;
}

:deep(.el-dialog__header) {
  padding: 10px 20px;
}
:deep(.el-dialog__title) {
  font-size: 22px;
}
</style>
