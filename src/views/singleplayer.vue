<script setup>
import menu from './menu.vue';
import topNav from './topNav.vue';
import settingsArea from '../settingarea.vue'
import workArea from '../components/workarea.vue'
import camSettings from '../components/settingsPages/camSettings.vue'
</script>

<template>
    <workArea>
        <topNav></topNav>
        <div>
            <menu></menu>
            <settingsArea>
                <camSettings></camSettings>
            </settingsArea>
        </div>
    </workArea>
</template>

<style>

.camsWrapper{
    display: flex;
    align-items: flex-start;
    gap: 1rem;
}

</style>