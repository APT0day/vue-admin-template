<script setup lang="ts">
import { url } from "inspector";
import { reactive } from "vue";

const loginForm = reactive({
    username: '',
    password: ''
})

const loginRules = reactive({
    username: [{ require: true, message: 'Please input activity username', trigger: 'blur' }],
    password: [{ require: true, message: 'Please input activity username', trigger: 'blur' }]
})

const login = () => {
    console.log(0)
}

</script>

<template>
    <div class="login">
        <el-form :model="loginForm" :rules="loginRules">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" placeholder="请输入账号" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" long @click="login()">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
// .login {
//     height: 100vh;

//     background: url('../../assets/background.webp');
//     background-repeat: no-repeat;
//     background-size: cover;
// }
</style>
