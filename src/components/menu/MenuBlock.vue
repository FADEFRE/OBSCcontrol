<script setup>
import MenuItem from './MenuItem.vue';
const name0 = "singleplayer"
const name1 = "twocamsgrid"
const name2 = "fourcamsgrid"
const name3 = "autoswitcher"
</script>


<template>
    <div class="menuWrapper">
        <MenuItem :routeName="name0"/>
        <MenuItem :routeName="name1"/>
        <MenuItem :routeName="name2"/>
        <MenuItem :routeName="name3"/>
    </div>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;

.menuWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
    height: 100%;
}

// Mobile
@media only screen and (max-width: 600px) {
}
</style>