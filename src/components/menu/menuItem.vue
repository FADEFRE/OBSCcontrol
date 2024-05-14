<template>
    <div class="menuButton">
        <p class="menuItemText">Placeholder</p>
    </div>
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
}

.menuItemText{
    color: #BFBFBF;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 1rem */
}

</style>