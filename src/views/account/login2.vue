<script setup lang="ts">
import { reactive, ref } from "vue"
import { login } from "@/api/account"
import { getUserInfo } from "@/api/user"
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
        <div class="login-container">
            <div class="login-container-container1">
                <div class="form-container">
                    <label for="" class="form-container-title">
                        通用后台管理系统
                    </label>
                    <form class="form">
                        <div class="form-username">
                            <input placeholder="请输入账户" class="form-username-input" />
                        </div>

                        <div class="form-password">
                            <input type="password" placeholder="请输入密码" class="form-password-input" />
                        </div>

                        <div class="form-checkbox">
                            <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                                <input id="remember_me" type="checkbox"
                                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    name="remember" />
                                <span class="ml-2 text-sm text-gray-600">
                                    记住我
                                </span>
                            </label>

                            <div class="form-forget">
                                <a class="form-forget-a" href="#">
                                    忘记密码
                                </a>
                            </div>
                        </div>

                        <div class="form-button">
                            <button class="form-button-button">
                                登陆
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.login {
    height: 100vh;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background: url('../../assets/background.webp');
    background-repeat: no-repeat;
    background-size: cover;

    &-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        display: flex;
        flex: 1 1 0%;
        justify-content: center;
        align-items: center;

        &-container1 {
            position: relative;
            margin-left: 2.5rem;
            margin-right: 2.5rem;
            max-width: 24rem;
            width: 100%;
        }
    }
}

.form-container {
    position: relative;
    width: 100%;
    border-radius: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #f3f4f6;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    &-title {
        display: block;
        margin-top: 0.75rem;
        font-size: 1.5rem;
        line-height: 2rem;
        color: #374151;
        text-align: center;
        font-weight: 600;
    }
}

.form {
    margin-top: 2.5rem;

    &-username {
        position: relative;

        &-input {
            margin-top: 0.25rem;
            padding-left: 0.5rem;
            display: block;
            width: 100%;
            border-style: none;
            background-color: #f3f4f6;
            height: 2.75rem;
            border-radius: 0.75rem;
            --tw-drop-shadow: drop-shadow(0 10px 8px #0000000a) drop-shadow(0 4px 3px #0000001a);

        }

        &-input:hover {
            background-color: rgba(219, 234, 254, 1);
        }

        &-input:focus {
            background-color: rgba(219, 234, 254, 1);
            box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        }
    }

    &-password {
        margin-top: 1.75rem;
        position: relative;

        &-input {
            margin-top: 0.25rem;
            padding-left: 0.5rem;
            display: block;
            width: 100%;
            border-style: none;
            background-color: #f3f4f6;
            height: 2.75rem;
            border-radius: 0.75rem;
            --tw-drop-shadow: drop-shadow(0 10px 8px #0000000a) drop-shadow(0 4px 3px #0000001a);

        }

        &-input:hover {
            background-color: rgba(219, 234, 254, 1);
        }

        &-input:focus {
            background-color: rgba(219, 234, 254, 1);
            box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        }
    }

    &-button {
        margin-top: 1.75rem;

        &-button {
            background-color: #3b82f6;
            width: 100%;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            border-radius: 0.75rem;
            color: #ffffff;
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px #0000001a, 0 10px 10px -5px #0000000a;
            transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
            transition-duration: 500ms;
            --tw-translate-x: 0;
            --tw-translate-y: 0;
            --tw-rotate: 0;
            --tw-skew-x: 0;
            --tw-skew-y: 0;
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            
        }

        &-button:hover {
            --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        &-button:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
        }
    }
}
</style>
