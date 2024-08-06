<script setup>
import topNav from '@/components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import camSettings from '@/components/settingsPages/camSettings.vue'

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { camId, camName } from '@/util/naming.js'
import { useOBSStore } from '@/store';

import { setCurrentScene, muteAll } from '@/obs-websocket/request.js'

import mobileMenu from '@/components/menu/mobileMenu.vue'

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
    <mobileMenu />
    <div class="page_content_holder">
        <topNav />
        <div class="sidenav">
            <MenuBlock />
            <div class=settingsarea>
                <div class="camsWrapper">
                    <camSettings :camSlotId="camId[0]" :camSlotName="camName[0]" />
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