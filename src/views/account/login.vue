<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { login } from '@/api/account';
import { setToken } from '@/utils/auth';

const loginForm = reactive({
    username: '',
    password: ''
})

const router = useRouter()
const userStore = useUserStore()

const handleClick = () => {
    login(loginForm).then(res => {
        if (res.token) {
            setToken(res.token)
            userStore.setToken(res.token)
            router.push('/')
        }
    })
}
</script>

<template>
    <div class="login">
        <div class="login-card">
            <div class="left">
                <h1>登录</h1>
                <p>欢迎来到三体世界</p>
                <form>
                    <div class="form-item">
                        <input v-model="loginForm.username" type="text" class="form-element" placeholder="请输入账号" />
                    </div>
                    <div class="form-item">
                        <input v-model="loginForm.password" type="password" class="form-element" placeholder="请输入密码" />
                    </div>
                    <div class="form-checkbox-item">
                        <input type="checkbox" id="rememberMe" checked />
                        <label for="rememberMe">记住我</label>
                    </div>
                    <div class="button">
                        <button type="button" @click="handleClick">登录</button>
                        <a href="#">忘记密码，点我重置！</a>
                    </div>
                    <p style="margin-top: 3rem; margin-bottom: 1.5rem">第三方账号登入</p>
                    <div class="social-buttons">
                        <a href="#" class="wechat">
                            <i class="bi bi-wechat"></i>
                        </a>
                        <a href="#" class="twitter">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" class="github">
                            <i class="bi bi-github"></i>
                        </a>
                    </div>
                </form>
            </div>
            <div class="right">
                <h2>自然选择号欢迎您登舰！</h2>
                <p>如果你没有账号，你想要现在注册一个吗？</p>
                <a href="#">注册</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/login.scss';
</style>