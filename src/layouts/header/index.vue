<script setup lang="ts">
import iCollapse from './collapse.vue'
import iBreadcrumb from './breadcrumb.vue'
import iAvatar from './avatar.vue'
</script>

<template>
    <el-header class="layout-header">
        <div class="layout-header-collapse">
            <i-collapse />
        </div>
        <div class="layout-header-breadcrumb">
            <i-breadcrumb />
        </div>
        <div class="layout-header-right">
            <i-avatar />
        </div>
    </el-header>
</template>

<style lang="scss" scoped>
.layout-header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e7eb;
    text-align: right;
    font-size: 16px;

    &-collapse {
        display: flex;
        align-items: center;
    }

    &-breadcrumb {
        display: flex;
        align-items: center;
    }

    &-right {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: flex-end;
        height: 100%;
        flex: 1 1 0%;
    }
}
</style>