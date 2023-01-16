<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import iSider from './sider/index.vue'
import iHeader from './header/index.vue'
import iHistory from './history/index.vue'
import useLayout from '@/hooks/useLayout'

const route = useRoute()

watchEffect(() => {
    useLayout.addHistoryTab(route)
})
</script>

<template>
    <el-container class="layout">
        <i-sider />
        <el-container direction="vertical">
            <i-header />
            <i-history />
            <el-main class="layout-main">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.login {
    height: 100vh;
    width: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    &-main {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
}
</style>