<script setup lang="ts">
import { reactive, ref } from "vue"
import { login } from "@/api/account"
import Cookie from "js-cookie"
import { useRouter } from "vue-router"

const loginForm = reactive({
    username: '',
    password: ''
})

const loginFormRef = ref()

const router = useRouter()

const validateUsername = (rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
    if (!value) {
        callback('账户不能为空')
    } else {
        callback()
    }
}

const validatePassword = (rule: unknown, value: string | undefined, callback: (msg?: string) => void) => {
    if (!value) {
        callback('密码不能为空')
    } else {
        callback()
    }
}

const loginRules = reactive({
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }]
})

const handleLogin = () => {
    loginFormRef.value.validate().then(() => {
        console.log('校验通过')
        login(loginForm).then(res => {
            console.log(res)
            if (res.token) {
                Cookie.set('token', res.token)
                router.push('/')
            }
        })
    }).catch(() => {
        console.log('校验不通过')
    })
}

</script>

<template>
    <div class="login">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" placeholder="请输入账号" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" long @click="handleLogin()">登陆</el-button>
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
