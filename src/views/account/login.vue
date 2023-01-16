<script setup lang="ts">
import { reactive, ref } from "vue"
import { login } from "@/api/account"
import { getUserInfo } from "@/api/user"
import Cookie from "js-cookie"
import { useRouter } from "vue-router"
import { useUserStore } from "@/store/user"

const loginForm = reactive({
    username: '',
    password: ''
})

const loginFormRef = ref()

const router = useRouter()
const userStore = useUserStore()

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
            if (res.token) {
                Cookie.set('token', res.token)
                userStore.token = res.token
                router.push('/')
                getUserInfo()
            }
        })
    }).catch(() => {
        console.log('校验不通过')
    })
}

</script>

<template>
    <div class="login">
        <!-- <el-card class="login-card" shadow="always"> -->
        <div class="login-box">
            <div class="login-box-title">
                <span>通用后台管理系统</span>
            </div>
            <el-form ref="loginFormRef" class="login-box-form" :model="loginForm" :rules="loginRules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" type="text" size="large" placeholder="请输入账号"
                        autocomplete="off" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" size="large" placeholder="请输入密码"
                        autocomplete="off" />
                </el-form-item>
                <div class="login-box-form-forget"><a>忘记密码</a></div>
                <el-form-item>
                    <el-button type="primary" class="login-box-form-button" @click="handleLogin()">登陆</el-button>
                </el-form-item>
                <div class="login-box-form-register">还没有账号?<a>注册账号</a></div>
            </el-form>
        </div>
        <!-- </el-card> -->
    </div>
</template>

<style lang="scss">
.login {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background: url('../../assets/background.webp');
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;

    &-box {
        width: 25rem;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        border-radius: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        background-color: #f3f4f6;

        &-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        &-form {

            &-forget {
                font-size: 0.9rem;
                text-align: right;
            }

            &-button {
                width: 100%;
            }

            &-register {
                text-align: center;
            }
        }
    }
}
</style>
