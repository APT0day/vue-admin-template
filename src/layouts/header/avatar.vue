<script setup lang="ts">
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
</script>

<template>
    <el-avatar shape="square" :size="40" src="../../src/assets/avatar.webp" />
    <div class="layout-header-right-username-container">
        <span class="layout-header-right-username-name">
            {{ userStore.username }}
        </span>
    </div>
    <!-- <el-dropdown>
        <el-icon :size="20" class="ml-2 mt-[1px] hover:rotate-90 duration-500 cursor-pointer">
            <setting />
        </el-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="openNewTab(UserEnum.GITHUB_REPOSITORY)">{{
                    t("github")
                }}</el-dropdown-item>
                <el-dropdown-item @click="toLogin">{{ t("logout") }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown> -->
</template>
