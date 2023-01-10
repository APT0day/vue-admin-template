<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { settings } from '@/settings'
import iLogo from './logo.vue'
import iItem from './item.vue'
import useSiderMenuList from '@/hooks/useSiderMenuList'

const acticeIndex = ref<string>("dashboard-console")

const router = useRouter()
const handleClick = () => {
    router.push('/')
}

const isCollapse = computed(() => {
    return useSiderMenuList.isCollapse.value
})
</script>

<template>
    <el-aside class="layout-sider" :width="useSiderMenuList.isCollapse.value ? settings.layout.minSidebarWidth : settings.layout.maxSidebarWidth">
        <div v-if="settings.layout.showLogo" class="layout-sider-logo" @click="handleClick()">
            <i-logo />
        </div>
        <el-menu :collapse="isCollapse" :default-active="acticeIndex" unique-opened collapse-transition>
            <i-item :menu="useSiderMenuList.menus.value" />
        </el-menu>
    </el-aside>
</template>

<style>
.el-menu {
  border-right: none;
}
</style>
