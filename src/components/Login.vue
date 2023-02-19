<template>
  <div class="login-wrap">
    <div class="ms-title">实验管理系统</div>
    <div class="ms-login">
      <el-form :model="form" label-width="0px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submit">登录</el-button>
        </div>
        <p style="font-size: 12px; line-height: 30px; color: #999">
          Tips : 用户名和密码随便填。
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
<script setup>
import { reactive } from "vue";
import { login } from "api/user/user";
import { ElMessage } from "element-plus";
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});

const submit = async () => {
  login(form.username, form.password)
    .then((res) => {
      ElMessage({
        type: "success",
        message: "登录成功",
      });
      localStorage.setItem("token",res.data.token)
      router.push({path: '/homepage'})
    })
    .catch((err) => {
      console.log(err);
      ElMessage({
        type: "warning",
        message: err.message || "用户名或密码错误",
      });
    });
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100vh;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: black;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
