<script setup>
import { useOBSStore } from '@/store';

const props = defineProps({
    routeName: {
        type: String,
        required: true,
    }
})

function buttonClicked() {
    const store = useOBSStore();
    store.Clicked();
}
</script>

<template>
    <router-link :to="{name: props.routeName}" class="menuButton">
        <p class="intersemibold16" @click="buttonClicked">{{ props.routeName }}</p>
    </router-link>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;

.menuButton{
    display: flex;
    padding: 1rem 2rem; 
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;

    border-radius: 0.5rem;
    background: #1A1A1A;
    text-decoration: none; 
}

</style>