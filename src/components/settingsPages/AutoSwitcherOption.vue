<script setup>
const props = defineProps({
    camSlotName: {
        type: String,
        required: true,
    },
})




</script>

<template>
    <div class="autoSwitcherOptionWrapper">
        <div class="autoSwitcherOptionButton">
            <p class="interbold16"> {{ props.camSlotName }}</p>
        </div>
        <Button class="switcherIconWrapper">
            <img class="icon" src="/src/assets/icons/eyeOn.svg">
        </Button>
    </div>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;


.icon{
    height: 1.5rem;
    aspect-ratio: 1 / 1;
}

.autoSwitcherOptionWrapper{
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;  
}

.autoSwitcherOptionButton{
    display: flex;
    padding: 1rem 2rem;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 8rem;
    width: 100%; 
    
    border-radius: 0.5rem;
    background: $color-secondary;    
}

.switcherIconWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 100%;
    aspect-ratio: 1 / 1;

    border-radius: 0.5rem;
    background: $color-secondary;
}

.switcherIconWrapper.is-inaktive{
    background: #FF285C;
}

// Mobile
@media only screen and (max-width: 600px) {
    .autoSwitcherOptionWrapper{
        min-width: 100%;
    }
}
</style>