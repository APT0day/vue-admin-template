<script setup lang="ts">
import { IMenu } from "@/types/menu"

interface Props {
    menu: IMenu[]
}

const props = withDefaults(defineProps<Props>(), {
    menu: () => []
})
</script>

<template>
    <template v-for="(menu, index) in props.menu" :index="index">
        <template>
            <el-menu-item v-for="(cmenu, key) of menu.children" :index="'sub_' + key"
                :active-key="menu.meta.menu.title + '-' + cmenu.meta.menu.title">
                <el-icon>
                    <component :is="menu.meta.menu.icon" />
                </el-icon>
                <span>{{ menu.meta.menu.title }}</span>
            </el-menu-item>
        </template>
    </template>
</template>

<style lang="scss" scoped>

</style>