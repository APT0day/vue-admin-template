<script setup lang="ts">
import iCollapse from './collapse.vue'
import iBreadcrumb from './breadcrumb.vue'
import iAvatar from './avatar.vue'
</script>

<template>
    <el-header class="layout-header">
        <div class="layout-header-collapse">
            <!-- <i-collapse /> -->
        </div>
        <div class="layout-header-breadcrumb">
            <i-breadcrumb />
        </div>
        <div class="layout-header-right">
            <i-avatar />
        </div>
    </el-header>
</template>
