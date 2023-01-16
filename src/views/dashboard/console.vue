<script setup lang="ts">
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
</script>

<template>
    <div>
        {{ userStore.token }}
        <br />
        ==============
        <br />
    </div>
</template>

<style lang="scss" scoped>

</style>