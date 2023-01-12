<script setup lang="ts">
import useLayout from '@/hooks/useLayout';
</script>

<template>
    <div>
        {{ useLayout.history }}
        <br />
        ==============
        <br />
        {{ useLayout.addHistoryTab }}
        <br />
        ==============
        <br />
        {{ $route.meta.menu }}
    </div>
</template>

<style lang="scss" scoped>

</style>