<script setup>
import workArea from '../components/workarea.vue'
import topNav from '../components/menu/topNav.vue';
import menu from '../components/menu/menu.vue';
import settingsArea from '../components/settingarea.vue'
import camSettings from '../components/settingsPages/camSettings.vue'
</script>

<template>
    <workArea>
        <topNav></topNav>
        <div>
            <menu></menu>
            <settingsArea>
                <div class="camsWrapper">
                    <camSettings></camSettings>
                    <camSettings></camSettings>
                </div>
            </settingsArea>
        </div>
    </workArea>
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