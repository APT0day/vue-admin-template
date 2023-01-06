<script setup lang="ts">
import { settings } from '@/settings'
</script>

<template>
    <div class="layout-sider-logo-container">
        <img :src="settings.layout.logo" class="layout-sider-logo-container-img" alt="logo">
        <div class="layout-sider-logo-container-title">
            <span class="layout-sider-logo-container-title-span">{{ settings.layout.title }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>