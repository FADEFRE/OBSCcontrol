<script setup>
import topNav from '@/components/menu/topNav.vue';
import MenuBlock from '@/components/menu/MenuBlock.vue';
import AutoSwitcherOption from '@/components/settingsPages/AutoSwitcherOption.vue'
</script>

<template>
    <topNav />
    <div class="sidenav">
        <MenuBlock />
        <div class=settingsarea>
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
            <AutoSwitcherOption />
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

// Mobile
@media only screen and (max-width: 600px) {
    .sidenav{
        flex-direction: column;
    }
}
</style>