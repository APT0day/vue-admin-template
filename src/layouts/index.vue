<script setup lang="ts">
import iSider from './sider/index.vue'
import iHeader from './header/index.vue'
import router from '@/router'
</script>

<template>
    <el-container class="layout">
        <i-sider />
        <el-container direction="vertical">
            <i-header />
            <el-main style="background-color: beige;">
                {{ $router.getRoutes() }}
                ==============================
                {{ router.getRoutes().filter((route) => route.children.length && route.meta.menu) }}
            </el-main>
            <!-- <Header />
            <History />
            <PageView /> -->
        </el-container>
    </el-container>
</template>
