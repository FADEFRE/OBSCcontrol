<script setup>
import menuItem from './menuItem.vue';
const name = "twocamsgrid"
const name1 = "fourcamsgrid"
const name2 = "singleplayer"
const name3 = "autoswitcher"
</script>


<template>
    <div class="menuWrapper">
        <menuItem :routeName="name2"/>
        <menuItem :routeName="name"/>
        <menuItem :routeName="name1"/>
        <menuItem :routeName="name3"/>
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

</style>