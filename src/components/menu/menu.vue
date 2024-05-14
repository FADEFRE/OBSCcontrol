<script setup>
import menuItem from './menuItem.vue';
</script>


<template>
    <div class="menuWrapper">
        <menuItem></menuItem>
        <menuItem></menuItem>
        <menuItem></menuItem>
        <menuItem></menuItem>
    </div>
</template>

<style>

.menuWrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
}

</style>