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
    <div class="container">
        <div class="page">A</div>
        <div class="page">B</div>
        <div class="page">C</div>
        <div class="page">D</div>
        <div class="page">E</div>
        <div class="page">F</div>
    </div>

</template>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 120px auto;
    transform-style: preserve-3d;
    /* 为了让其更有立体效果 */
    transform: rotateX(-30deg) rotateY(45deg);
    transform-origin: 150px 150px 150px;
    animation: rotate 6s infinite;
}

.container .page {
    position: absolute;
    width: 300px;
    height: 300px;
    text-align: center;
    line-height: 300px;
    color: #fff;
    background-size: cover;
}

.container .page:first-child {
    background-image: url(../../../src/assets/background.webp);
    background-color: rgba(0, 0, 0, .2);
}

.container .page:nth-child(2) {
    transform: rotateX(90deg);
    transform-origin: 0 0;
    transition: transform 10s;
    background-color: rgba(179, 15, 64, 0.6);
    background-image: url(../../../src/assets/background.webp);
}

.container .page:nth-child(3) {
    transform: translateZ(300px);
    background-color: rgba(22, 160, 137, 0.7);
    background-image: url(../../../src/assets/background.webp);
}

.container .page:nth-child(4) {
    transform: rotateX(-90deg);
    transform-origin: -300px 300px;
    background-color: rgba(210, 212, 56, 0.2);
    background-image: url(../../../src/assets/background.webp);
}

.container .page:nth-child(5) {
    transform: rotateY(-90deg);
    transform-origin: 0 0;
    background-color: rgba(201, 23, 23, 0.6);
    background-image: url(../../../src/assets/background.webp);
}

.container .page:nth-child(6) {
    transform: rotateY(-90deg) translateZ(-300px);
    transform-origin: 0 300px;
    background-color: rgba(16, 149, 182, 0.2);
    background-image: url(../../../src/assets/background.webp);
}
</style>