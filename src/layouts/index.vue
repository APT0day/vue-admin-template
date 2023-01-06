<script setup lang="ts">
import iSider from './sider/index.vue'
</script>

<template>
    <el-container class="layout">
        <i-sider />
        <el-container>
            <!-- direction="vertical" -->
            <el-header style="background-color: cornflowerblue;">
                Header
            </el-header>
            <el-main style="background-color: beige;">Main</el-main>
            <!-- <Header />
        <History />
        <PageView /> -->
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>

</style>