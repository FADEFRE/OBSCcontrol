<script setup>
import camSettings from '@/components/settingsPages/camSettings.vue';
import { connectToObs } from '@/obs-websocket/index';
import { onBeforeMount } from "vue";
import { requestScenes } from '@/obs-websocket/request';

onBeforeMount(() => {
    before()
})


async function before() {
    await connectToObs()
    await requestScenes()
}

const slot1 = "Slot_1"
const slot2 = "Slot_2"
const slot3 = "Slot_3"
const slot4 = "Slot_4"
</script>

<template>
    <div>
        <Button label="reconnect" @click="before()" />
    </div>
        <camSettings :camSlotName="slot1"/>
        <camSettings :camSlotName="slot2"/>
        <camSettings :camSlotName="slot3"/>
        <camSettings :camSlotName="slot4"/>
</template>

<style lang="scss">
@use '../assets/styles/util' as *;
@use '../assets/styles/global' as *;
@use '../assets/styles/components' as *;


@font-face {
    font-family: 'Inter';
    src: url("/src/assets/fonts/Inter-Regular.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url("/src/assets/fonts/Inter-SemiBold.ttf") format('truetype');
    font-weight: semibold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url("/src/assets/fonts/Inter-Bold.ttf") format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

</style>