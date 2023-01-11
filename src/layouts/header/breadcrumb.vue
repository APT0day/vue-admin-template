<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";
import useLayout from '@/hooks/useLayout'

const route = useRoute();
const breadArr = ref<(string | undefined)[]>([]);

watchEffect(() => {
    breadArr.value = useLayout.getBreadcrumb(route)
})
</script>

<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item v-for="bread in breadArr">{{ bread }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
