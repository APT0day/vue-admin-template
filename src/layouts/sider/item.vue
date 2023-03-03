<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IMenu } from "@/types/menu"

interface Props {
    menu: IMenu[]
}

const props = withDefaults(defineProps<Props>(), {
    menu: () => []
})

const router = useRouter()
const handleClick = (toName: string | undefined) => {
    router.push({name: toName})
}

</script>

<template>
    <template v-for="(menu, index) in props.menu" :key="index">
        <template v-if="!menu.children?.length">
            <el-menu-item :index="menu.name" @click="handleClick(menu.name)">
                <el-icon>
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.title }}</span>
            </el-menu-item>
        </template>
        <el-sub-menu v-else :index="menu.name">
            <template #title>
                <el-icon>
                    <component :is="menu.icon" />
                </el-icon>
                <span>{{ menu.title }}</span>
            </template>
            <template v-for="(cmenu, key) of menu.children">
                <item v-if="cmenu.children" :menu="cmenu.children" />
                <el-menu-item v-else :key="key" :index="cmenu.name" @click="handleClick(cmenu.name)">{{ cmenu.title }}</el-menu-item>
            </template>
        </el-sub-menu>
    </template>
</template>
