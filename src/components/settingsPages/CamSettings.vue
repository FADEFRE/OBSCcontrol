<script setup>
import { disconnectFromObs } from '@/obs-websocket/index';
import { ref, onMounted, onBeforeUnmount, toRaw } from "vue";
import { requestScenes, getSceneItems, unMuteAllOfPerson, muteAll, findAllActiveInObs, getNameOfActiveInScene } from '@/obs-websocket/request';
import { setSceneItemActive } from '@/obs-websocket/buttonLogic';
import { useOBSStore } from '@/store';
import { camId } from '@/util/naming.js'

import CustomDropdown from '@/components/CustomDropdown.vue'


const props = defineProps({
    camSlotId: {
        type: String,
        required: true,
    },
    camSlotName: {
        type: String,
        required: true,
    },
})

const store = useOBSStore();

let viewOptions = []
const viewOptionsRef = ref([])
const selectedView = ref()
const selectedPerson = ""

onMounted(() => {
    setTimeout(() => {
        mount()
        const d = document.getElementById(props.camSlotId)
        const store = useOBSStore()
        d.classList.add("is-inactive");
        setTimeout(() => {
            if (store.getCurrentSound === props.camSlotId) {
                d.classList.replace("is-inactive", "is-active");
            }
        }, 50);
    }, 100);
})

async function mount() {
    await requestScenes()
    viewOptions = await getSceneItems(props.camSlotId)
    viewOptionsRef.value = viewOptions
    await refreshSlots()
}

function update() {
    disableAllMic()
    const d = document.getElementById(props.camSlotId)
    if (store.getCurrentSound === props.camSlotId) {
        store.setCurrentSound("")
        d.classList.replace("is-active", "is-inactive");
        muteAll()
    }
    else {
        store.setCurrentSound(props.camSlotId);
        d.classList.replace("is-inactive", "is-active");
        unMuteAllOfPerson(props.camSlotId)
    }



}

onBeforeUnmount(() => {
    unmount()
})

async function unmount() {
    const d = document.getElementById(props.camSlotId)
    d.classList.remove("is-inactive");
    d.classList.remove("is-active");
    store.setCurrentSound("")
    await disconnectFromObs();
}

async function disableAllMic() {
    for (let index = 1; index < camId.length; index++) {
        try {
            const micClass = document.getElementById(camId[index])
            micClass.classList.remove("is-inactive");
            micClass.classList.remove("is-active");
            micClass.classList.add("is-inactive");
        } catch (error) {
            
        }
    }
}

async function refreshSlots() {
    const d = document.getElementById(props.camSlotId)
    d.classList.remove("is-inactive");
    d.classList.remove("is-active");
    findAllActiveInObs()
    const ViewInSlot = await getNameOfActiveInScene(props.camSlotId)


}

async function setSelectedView() {
    const raw = toRaw(selectedView.value)
    await setSceneItemActive(props.camSlotId, raw.name)
}
</script>

<template>
    <div class="camSettingsBody">
        <div class="camSettingsTopWrapper">
            <p class="interbold16"> {{ props.camSlotName }} </p>
            <div class="camSettingsOptionsWrapper">
                <Button :id="props.camSlotId" class="iconWrapper" @click="update()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 2.75C10.21 2.75 8.75 4.21 8.75 6V11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5V6C15.25 4.21 13.79 2.75 12 2.75Z" fill="currentColor"/>
                        <path d="M12.0001 19.75C7.3701 19.75 3.6001 15.98 3.6001 11.35V9.64999C3.6001 9.23999 3.9401 8.89999 4.3501 8.89999C4.7601 8.89999 5.1001 9.23999 5.1001 9.64999V11.35C5.1001 15.15 8.2001 18.25 12.0001 18.25C15.8001 18.25 18.9001 15.15 18.9001 11.35V9.64999C18.9001 9.23999 19.2401 8.89999 19.6501 8.89999C20.0601 8.89999 20.4001 9.23999 20.4001 9.64999V11.35C20.4001 15.98 16.6301 19.75 12.0001 19.75Z" fill="currentColor"/>
                        <path d="M13.3899 7.18001C13.3099 7.18001 13.2199 7.17001 13.1299 7.14001C12.3999 6.87001 11.5999 6.87001 10.8699 7.14001C10.4799 7.28001 10.0499 7.08001 9.90988 6.69001C9.76988 6.30001 9.96988 5.87001 10.3599 5.73001C11.4199 5.35001 12.5899 5.35001 13.6499 5.73001C14.0399 5.87001 14.2399 6.30001 14.0999 6.69001C13.9799 6.99001 13.6899 7.18001 13.3899 7.18001Z" fill="currentColor"/>
                        <path d="M12.8001 9.30001C12.7301 9.30001 12.6701 9.29001 12.6001 9.27001C12.2001 9.16001 11.7901 9.16001 11.3901 9.27001C10.9901 9.38001 10.5801 9.14001 10.4701 8.74001C10.3601 8.35001 10.6001 7.94001 11.0001 7.83001C11.6501 7.65001 12.3501 7.65001 13.0001 7.83001C13.4001 7.94001 13.6401 8.35001 13.5301 8.75001C13.4401 9.08001 13.1301 9.30001 12.8001 9.30001Z" fill="currentColor"/>
                        <path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z" fill="currentColor"/>
                        </svg>                                     
                </Button>
            </div>
        </div>
        <div class="camSettingsCam">
            <Dropdown 
                v-model="selectedView" 
                :options="viewOptionsRef" 
                optionLabel="name" 
                placeholder="Select View" 
                class="camSettingsDropdown" 
                @change="setSelectedView" 
            />
        </div>
    </div>
</template>

<style lang="scss">
@use '/src/assets/styles/util' as *;
@use '/src/assets/styles/global' as *;
@use '/src/assets/styles/components' as *;

.camSettingsBody{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
}

.camSettingsTopWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
}

.camSettingsOptionsWrapper{
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.iconWrapper{
    display: flex;
    padding: 0.5rem;
    align-items: flex-start;
    gap: 0.5rem;

    border-radius: 0.5rem;
    background: #121212;
    color: white;
}

.iconWrapper.is-active{
    background: #AAFF00;
    color: #0D0D0D;
}

.iconWrapper.is-inactive{
    background: #121212;
    color: white;
}

.camSettingsCam{
    display: flex;
    width: 30rem;
    padding: 0.5rem 8rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    aspect-ratio: 16 / 9;

    border-radius: 0.5rem;
    background: #121212;
}

.camSettingsDropdown{
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;

    border-radius: 0.5rem;
    background: #1A1A1A;
}

.icon{
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    color: inherit;
}

// Mobile
@media only screen and (max-width: 600px) {
    .camSettingsCam{
        width: 100%;
        padding: 0.5rem 2rem;
    }
    .camSettingsBody{
        width: 100%;
    }
}

</style>