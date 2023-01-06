<script setup lang="ts">
import { ref, reactive } from 'vue'
import { settings } from '@/settings'
import iLogo from './logo.vue'
import iItem from './item.vue'

const isCollapse = ref(false)
const menus = ref([
    {
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: 'dashboard' }
    },
    {
        path: 'test',
        name: 'test',
        meta: { title: 'test' }
    }
])
</script>

<template>
    <el-aside class="layout-sider" width="250px">
        <div v-if="settings.layout.showLogo" class="layout-sider-logo">
            <i-logo />
        </div>
        <el-menu :collapse="isCollapse">
            <i-item :menu="menus" />
        </el-menu>
        sider
    </el-aside>
</template>

<style lang="scss" scoped>

</style>