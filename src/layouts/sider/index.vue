<script setup lang="ts">
import { ref } from 'vue'
import { settings } from '@/settings'
import iLogo from './logo.vue'
import iItem from './item.vue'
import menuListRoutes from '@/hooks/useMenu'

const isCollapse = ref(false)

const acticeIndex = ref<string>("")



</script>

<template>
    <el-aside class="layout-sider" :width="settings.layout.sidebarWidth">
        <div v-if="settings.layout.showLogo" class="layout-sider-logo">
            <i-logo />
        </div>
        <el-menu :collapse="isCollapse" :default-active="acticeIndex">
            <i-item :menu="menuListRoutes.menus.value" />
        </el-menu>
    </el-aside>
</template>
