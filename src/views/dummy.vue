<script setup>
import Intro from '../components/Intro.vue';
import camSettings from '@/components/settingsPages/camSettings.vue';
</script>

<template>
        <camSettings></camSettings>
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