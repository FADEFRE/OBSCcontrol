<script setup>
import camSettings from '@/components/settingsPages/camSettings.vue';
import { connectToObs } from '@/obs-websocket/index';
import { onBeforeMount } from "vue";

import { camId, camName } from '@/util/naming.js'

onBeforeMount(() => {
    before()
})


async function before() {
    await connectToObs()
}

</script>

<template>
    <camSettings :camSlotId="camId[1]" :camSlotName="camName[1]" />
    <camSettings :camSlotId="camId[2]" :camSlotName="camName[2]" />
    <camSettings :camSlotId="camId[3]" :camSlotName="camName[3]" />
    <camSettings :camSlotId="camId[4]" :camSlotName="camName[4]" />
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