<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import useLayout from '@/hooks/useLayout'

const activeHistory = ref<string>()
const route = useRoute()

watchEffect(() => {
    activeHistory.value = route.meta.menu?.title
})
</script>

<template>
    <div class="layout-history">
        <el-space wrap class="layout-history-space">
            <el-tag class="layout-history-space-tag" v-for="tag in useLayout.history.value" size="large"
                :type="activeHistory === tag.title ? '' : 'info'" :closable="activeHistory === tag.title ? false : true"
                @click="$router.push({ name: tag.name })" @close="useLayout.removeHistoryTab(tag)">{{
    tag.title
                }}</el-tag>
        </el-space>
    </div>
</template>

<style lang="scss" scoped>
.layout-history {
    align-self: flex-start;
    display: flex;
    width: 100%;
    padding: 4px;
    border-bottom: 1px solid #e5e7eb;

    &-space {
        flex: 1 1 0%;

        &-tag {
            margin: 4px;
            cursor: pointer;
        }
    }
}
</style>