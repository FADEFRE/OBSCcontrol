<script setup>
import menu from './menu.vue';
import topNav from './topNav.vue';
import settingsArea from '../settingarea.vue'
import camSettings from '../components/settingsPages/camSettings.vue'
</script>

<template>
        <topNav></topNav>
        <div>
            <menu></menu>
            <settingsArea>
                <camSettings></camSettings>
            </settingsArea>
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

</style>