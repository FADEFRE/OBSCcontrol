<script setup>
import topNav from '@/components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import AutoSwitcherOption from '@/components/settingsPages/AutoSwitcherOption.vue'

import { onBeforeMount, onUnmounted } from "vue";
import { connectToObs, disconnectFromObs } from '@/obs-websocket/index';
import { setCurrentScene } from '@/obs-websocket/request.js'
import { useOBSStore } from '@/store';

import mobileMenu from '@/components/menu/mobileMenu.vue'

onBeforeMount(() => {
    before()
})

async function before() {
    await connectToObs()
    await setCurrentScene("Solo_Cam_Grid")
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
            <MenuBlock class="menuDisplay"/>
            <div class=settingsarea>
                <div class="switcherContentWrap">
                    <InputNumber class="autoSwitcherInput" v-model="value3" inputId="horizontal-buttons" suffix=" sek." :min="30" showButtons buttonLayout="horizontal" :step="30" mode="decimal" />
                    <AutoSwitcherOption :camSlotName="'Lennart'"/>
                    <AutoSwitcherOption :camSlotName="'Basti'"/>
                    <AutoSwitcherOption :camSlotName="'Freddy'"/>
                    <AutoSwitcherOption :camSlotName="'Steven'"/>
                    <AutoSwitcherOption :camSlotName="'Lucy'"/>
                    <AutoSwitcherOption :camSlotName="'Darsey'"/>
                    <AutoSwitcherOption :camSlotName="'Marco'"/>
                </div>
            </div>
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

.autoSwitcherInput{
    border-radius: .5rem;
    overflow: hidden;
    .p-inputnumber-input{
        background-color: $color-secondary;
        color: white;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }       
}

.p-inputnumber-input{
    width: 100%;
    min-width: 5rem;
}

.p-button.p-component.p-button-icon-only.p-inputnumber-button{
    background-color: $color-primary;
    color: $color-secondary;
    width: 4rem;   
}

.switcherContentWrap{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

// Mobile
@media only screen and (max-width: 600px) {
    .sidenav{
        flex-direction: column;
    }
    .settingsarea{
        min-width: 100%;
    }
    .autoSwitcherInput{
        width: 100%;
    }
    .switcherContentWrap{
        width: 100%;
    }
}
</style>