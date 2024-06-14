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
    gap: 0.5rem;
    background: $color-background;
    align-self: stretch;
    height: 100dvh;
}
</style>