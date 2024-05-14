<script setup>
import topNav from '../components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import settingsArea from '../components/settingarea.vue'
import camSettings from '../components/settingsPages/camSettings.vue'
</script>

<template>
    <topNav />
    <div class="sidenav">
        <MenuBlock />
        <settingsArea>
            <div class="camsWrapper">
                <camSettings></camSettings>
                <camSettings></camSettings>
            </div>
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