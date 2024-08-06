<script setup>
import TopNav from '@/components/menu/TopNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import MobileMenu from '@/components/menu/MobileMenu.vue'
import CamSettings from '@/components/settingsPages/CamSettings.vue'

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { camId, camName } from '@/util/naming.js'
import { useOBSStore } from '@/store';

import { setCurrentScene, muteAll } from '@/obs-websocket/request.js'


onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
    await setCurrentScene("Solo_Cam_Grid")
    await muteAll()
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
    <MobileMenu />
    <div class="page_content_holder">
        <TopNav />
        <div class="sidenav">
            <MenuBlock />
            <div class=settingsarea>
                <div class="camsWrapper">
                    <CamSettings :camSlotId="camId[0]" :camSlotName="camName[0]" />
                </div>
            </div>
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