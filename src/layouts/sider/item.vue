<script setup lang="ts">
defineProps({
    menu: {
        require: true,
        default() {
            return {}
        }
    }
})
</script>

<template>
    <template v-for="(item, index) in menu" :key="index">
        <template v-if="menu.hideParent">
            <el-menu-item v-for="(cmenu, key) of menu.children" :key="'sub_ ' + key"
                :active-key="menu.title + '-' + cmenu.title">
                <el-icon>
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ t(menu.title!) }}</span></el-menu-item>
        </template>
    </template>
</template>

<style lang="scss" scoped>

</style>