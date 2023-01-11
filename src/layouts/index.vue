<script setup lang="ts">
import iSider from './sider/index.vue'
import iHeader from './header/index.vue'
import iHistory from './history/index.vue'
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
