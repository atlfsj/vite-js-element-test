<template>

    <div class="box">
      <h1>登录</h1>

      <el-form :model="form" label-width="120px" class="user">
        <el-form-item label="用户名" >
          <el-input v-model="user" style="width: max-content" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="pwd" type="password" style="width: max-content" />
        </el-form-item>
        <el-form-item label="身份">
          <el-radio-group v-model="role">
            <el-radio label="管理员" class="maneger" />
            <el-radio label="学生" />
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <RouterLink to="/home">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </RouterLink>
          <RouterLink to="/register">
            <el-button class="register">注册</el-button>
          </RouterLink>
        </el-form-item>
      </el-form>
    </div>

</template>
  
<script setup>
import { reactive, toRefs } from 'vue'
/* import Admin_Manage from '../hooks/admin' */

// do not use same name with ref
const form = reactive({
  user: '',
  pwd: '',
  role: '',
})

/* const {Admin_Login} = Admin_Manage(); */

// 解构
const { user, pwd, role } = toRefs(form)
// ref对象的值加value   console.log(user.value)
const onSubmit = () => {
  // 发起请求
  // hooks文件夹 : 业务内容独立出来

  /* Admin_Login(user,pwd);  // 执行登录方法 */
}
</script>
  

<style scoped>
.register {
  margin-left: 25px;
}

h1 {
  text-align: center;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(228, 223, 223);
  border-radius: 3%;

}
.user{
  margin-right: 70px;
}
.maneger{
  margin-left: 10px;
}
</style>