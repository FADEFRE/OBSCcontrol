<template>
    <div class="autoSwitcherOptionWrapper">
        <div class="autoSwitcherOptionButton">
            <p class="interbold16">Spieler 1</p>
        </div>
        <div class="iconWrapper">
            <img class="icon" src="/src/assets/icons/eyeOn.svg">  
        </div>
    </div>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;


.icon{
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
}

.autoSwitcherOptionWrapper{
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;    
}

.autoSwitcherOptionButton{
    display: flex;
    padding: 1rem 2rem;
    align-items: flex-start;
    gap: 0.5rem;
    
    border-radius: 0.5rem;
    background: $color-secondary;    
}

.iconWrapper{
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    height: 100%;

    border-radius: 0.5rem;
    background: $color-secondary;
}
</style>