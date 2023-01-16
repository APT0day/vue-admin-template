<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { settings } from '@/settings'
import iLogo from './logo.vue'
import iItem from './item.vue'
import useLayout from '@/hooks/useLayout'

const acticeIndex = ref<string | undefined | null | symbol>("")

const router = useRouter()
const route = useRoute()
const handleClick = () => {
    router.push('/')
}

const isCollapse = computed(() => {
    return useLayout.isCollapse.value
})

watchEffect(() => {
    acticeIndex.value = route.name
})
</script>

<template>
    <el-aside class="layout-sider"
        :width="useLayout.isCollapse.value ? settings.layout.minSidebarWidth : settings.layout.maxSidebarWidth">
        <div v-if="settings.layout.showLogo" class="layout-sider-logo" @click="handleClick()">
            <i-logo />
        </div>
        <el-menu :collapse="isCollapse" :default-active="acticeIndex" unique-opened>
            <i-item :menu="useLayout.menus.value" />
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
/* 加过渡给侧边导航*/
.el-aside {
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -moz-transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -o-transition: width 0.25s;
}

.el-menu {
    transition: all 10ms;
    border-right: none;
}

.layout-sider {
    background-color: #fff;
    min-height: 100vh;
    height: 100%;
    border-right: 1px solid #e5e7eb;

    &-logo {
        display: flex;
        justify-content: center;
    }
}
</style>
