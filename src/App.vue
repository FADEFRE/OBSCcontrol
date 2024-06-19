<template>
    <div class="page">
        <router-view class="main-content" />
    </div>
</template>

<style lang="scss">
@use '@/assets/styles/util' as *;
@use '@/assets/styles/global' as *;
@use '@/assets/styles/components' as *;

.page {
    display: flex;
    padding: 4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background: $color-background;
    align-self: stretch;
    min-height: 100dvh;
    width: 100%;;
}

.main-content{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    height: 100%;
}

// Mobile
@media only screen and (max-width: 600px) {
    .page{
        padding: 1rem;
        gap: 2.5rem;
    }
}
</style>