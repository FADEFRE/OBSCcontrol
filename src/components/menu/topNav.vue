<script setup>
import { onMounted, onUnmounted } from "vue";
import { useOBSStore } from '@/store';

onMounted(() => {
    const d = document.getElementById("status")
    const store = useOBSStore()
    d.classList.add("is-disconnected");
    setTimeout(() => {
        if (store.getStatus) {
            d.classList.replace("is-disconnected", "is-connected");
        }
    }, 150);
})

onUnmounted(() => {
    const d = document.getElementById("status")
    d.classList.remove("is-disconnected");
    d.classList.remove("is-connected");
})

</script>


<template>
    <div class="topNavWrapper">
        <p class="topNavText">Control Center</p>
        <div class="topMenuOptionsWrap">
            <div id="status" class="iconWrapper">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.6665 16.7333C9.30192 14.5382 12.6233 13.3362 16.0532 13.3362C19.483 13.3362 22.8044 14.5382 25.4398 16.7333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.89355 12C5.79012 8.56529 10.8059 6.6702 16.0002 6.6702C21.1945 6.6702 26.2103 8.56529 30.1069 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.3735 21.48C12.7271 20.5183 14.3464 20.0017 16.0069 20.0017C17.6673 20.0017 19.2866 20.5183 20.6402 21.48" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 26.6667H16.0133" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                     
            </div>
        </div>
    </div>
</template>



<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;

.topMenuOptionsWrap{
    display: flex;
    align-items: center;
    gap: 1rem;
}

.topNavWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 100%;
    padding-bottom: 2rem;    
}

.topNavText{
    color: #FFF;
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 2rem */
}

.iconWrapper{
    display: flex;
    padding: 1rem;
    align-items: flex-start;
    gap: 0.5rem;
    
    border-radius: 0.5rem;
    background: #1A1A1A;
    color: white;
}
// Connection Status
.iconWrapper.is-connected{
    background: #AAFF00;
    color: #1A1A1A;
}

.iconWrapper.is-disconnected{
    background: #FF285C;
}

.iconLarge{
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
}

</style>