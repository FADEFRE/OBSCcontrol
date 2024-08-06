<script setup>
import TopNav from '@/components/menu/TopNav.vue';
import MobileMenu from '@/components/menu/MobileMenu.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';

onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
}

onUnmounted(() => {
    unmount()
})

async function unmount() {
    await disconnectFromObs();
}
</script>

<template>
    <MobileMenu />
    <div>
        <TopNav />
        <div class="sidenav">
            <MenuBlock />
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/util' as *;
@use '../assets/styles/global' as *;
@use '../assets/styles/components' as *;

.camsWrapper{
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

.sidenav{
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex: 1 0 0;
    align-self: stretch;
}

// Mobile
@media only screen and (max-width: 600px) {
    .sidenav{
        flex-direction: column;
    }
    .settingsarea{
        min-width: 100%;
    }
}
</style>