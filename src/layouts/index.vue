<script setup lang="ts">
import iSider from './sider/index.vue'
import iHeader from './header/index.vue'
import router from '@/router'
import useMenu from '@/hooks/useSiderMenuList'
</script>

<template>
    <el-container class="layout">
        <i-sider />
        <el-container direction="vertical">
            <i-header />
            <el-main style="background-color: beige;">
                {{ useMenu.menus }}
            </el-main>
            <!-- <Header />
            <History />
            <PageView /> -->
        </el-container>
    </el-container>
</template>
