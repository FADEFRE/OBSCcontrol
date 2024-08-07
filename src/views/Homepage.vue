<script setup>
import topNav from '@/components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { useOBSStore } from '@/store';

import mobileMenu from '@/components/menu/mobileMenu.vue'

onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
    const store = useOBSStore();
}

onUnmounted(() => {
    unmount()
})

async function unmount() {
    await disconnectFromObs();
}
</script>

<template>
    <div>
        <mobileMenu />
        <topNav />
        <div class="sidenav">
            <MenuBlock class="homeNav" />
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/util' as *;
@use '../assets/styles/global' as *;
@use '../assets/styles/components' as *;

.homeNav{
    display: flex;
}
</style>