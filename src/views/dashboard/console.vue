<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayout from '@/hooks/useLayout';

const route = useRoute()
</script>

<template>
    <div>
        {{ useLayout.history }}
    </div>
</template>

<style lang="scss" scoped>

</style>