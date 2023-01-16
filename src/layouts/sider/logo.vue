<script setup lang="ts">
import useLayout from '@/hooks/useLayout'
import { settings } from '@/settings'
</script>

<template>
    <div class="layout-sider-logo-container">
        <img :src="settings.layout.logo" class="layout-sider-logo-container-img" alt="logo">
        <div v-show="!useLayout.isCollapse.value" class="layout-sider-logo-container-title">
            <span class="layout-sider-logo-container-title-span">{{ settings.layout.title }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout-sider-logo-container {
    display: flex;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 220px;
    cursor: pointer;
    color: #f6ca9d;

    &-img {
        width: 40px;
        margin-left: 12px;
    }

    &-title {
        flex: 1 1 0%;
        margin-left: 8px;
        margin-right: 4px;
        width: 160px;

        &-span {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
        }
    }
}
</style>