<script setup>
import TopNav from '@/components/menu/TopNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import MobileMenu from '@/components/menu/MobileMenu.vue'
import CamSettings from '@/components/settingsPages/CamSettings.vue';

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { camId, camName } from '@/util/naming.js'
import { useOBSStore } from '@/store';

import { setCurrentScene, setAllCurrentActiveAgain, requestScenes, muteAll } from '@/obs-websocket/request.js'


onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
    await requestScenes()
    const store = useOBSStore()
    if (store.wasButtonClicked) {
        if (store.getCurrentScene !== "2_Cam_Grid") {
            await setCurrentScene("2_Cam_Grid")
            await muteAll()
            store.setCurrentSound("")
        }
        store.removeClicked()
    }
    else {
        await setAllCurrentActiveAgain()
    }
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
            <MenuBlock class="menuDisplay"/>
            <div class=settingsarea>
                <div class="camsWrapper">
                    <CamSettings :camSlotId="camId[1]" :camSlotName="camName[1]" />
                    <CamSettings :camSlotId="camId[2]" :camSlotName="camName[2]" />
                </div>
            </div>
        </div>
    </div>    
</template>

<style lang="scss">
@use '../assets/styles/util' as *;
@use '../assets/styles/global' as *;
@use '../assets/styles/components' as *;
</style>
