<script setup>
import topNav from '@/components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import AutoSwitcherOption from '@/components/settingsPages/AutoSwitcherOption.vue'

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { setCurrentScene } from '@/obs-websocket/request.js'
import { useOBSStore } from '@/store';

onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
    await setCurrentScene("4_Cam_Grid")
    const store = useOBSStore();
    store.setCurrentSound("")
}

onUnmounted(() => {
    unmount()
})

async function unmount() {
    await disconnectFromObs();
}

</script>

<template>
    <topNav />
    <div class="sidenav">
        <MenuBlock />
        <div class=settingsarea>
            <AutoSwitcherOption :camSlotName="'Lennart'"/>
            <AutoSwitcherOption :camSlotName="'Basti'"/>
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/styles/util' as *;
@use '../assets/styles/global' as *;
@use '../assets/styles/components' as *;

.sidenav{
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex: 1 0 0;
    align-self: stretch;
}

.settingsarea{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    flex: 1 0 0;
    align-self: stretch;
    height: 100%;
}

// Mobile
@media only screen and (max-width: 600px) {
    .sidenav{
        flex-direction: column;
    }
}
</style>