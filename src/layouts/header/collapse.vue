<script setup lang="ts">
import useSiderMenuList from '@/hooks/useSiderMenuList'
const handleClick = () => {
    useSiderMenuList.changeCollapse()
}
</script>

<template>
    <div class="layout-header-collapse-container" @click="handleClick()">
        <svg class="layout-header-collapse-container-svg" :class="{ 'rotate-180': useSiderMenuList.isCollapse.value }"
            viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z">
            </path>
        </svg>
    </div>
</template>

<style lang="scss">
.rotate-180 {
    transform: rotate(180deg);
}
</style>
