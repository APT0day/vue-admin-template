<script setup lang="ts">
import { useRouter } from 'vue-router';
import { removeToken } from '@/utils/auth'
import { useUserStore } from '@/store/user'
import { getUserInfo } from "@/api/user"

const userStore = useUserStore()
const router = useRouter()

const toDashboard = () => {
    router.push({ name: 'dashboard-console' })
}
const toLogin = () => {
    removeToken('token')
    router.replace({ name: 'login' })
}
</script>

<template>
    <el-dropdown>
        <div class="layout-header-right-username">
            <el-avatar shape="square" :size="40" src="../../src/assets/avatar.webp" />
            <div>
                <span class="layout-header-right-username-name">
                    {{ userStore.username }}
                </span>
            </div>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="toDashboard">
                    <span>工作台</span>
                </el-dropdown-item>
                <el-dropdown-item @click="toLogin">
                    <span>logout</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<style lang="scss" scoped>
.layout-header-right-username {
    display: flex;
    cursor: pointer;

    &-name {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 16px;
        font-weight: 500;
        margin-left: 12px;
    }
}
</style>