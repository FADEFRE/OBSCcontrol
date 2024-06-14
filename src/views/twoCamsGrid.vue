<script setup>
import topNav from '../components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import camSettings from '../components/settingsPages/camSettings.vue'
</script>

<template>
    <topNav />
    <div class="sidenav">
        <MenuBlock />
        <div class=settingsarea>
            <div class="camsWrapper">
                <camSettings></camSettings>
                <camSettings></camSettings>
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

.settingsarea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex: 1 0 0;
    align-self: stretch;
    height: 100%;
}
</style>