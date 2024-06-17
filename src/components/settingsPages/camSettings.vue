<script setup>
import { connectToObs } from '@/obs-websocket/index';
import { ref, onBeforeMount, toRaw } from "vue";
import { 
    requestScenes,
    getAllSceneNames,
    getSceneItems,
    } from '@/obs-websocket/request';
    
import { setSceneItemActive } from '@/obs-websocket/buttonLogic';

onBeforeMount(() => {
    before()
})

const props = defineProps({
    camSlotName: {
        type: String,
        required: true,
    }
})

let viewOptions = []
const viewOptionsRef = ref([])

async function before() {
    await connectToObs()
    await requestScenes()
    viewOptions = await getSceneItems(props.camSlotName)
    viewOptionsRef.value = viewOptions
    console.log(viewOptions)
}

const selectedView = ref()


async function setSelectedView() {
  console.log("test")
  const raw = toRaw(selectedView.value)
  console.log(raw)
  await setSceneItemActive(props.camSlotName, raw.name)
}

</script>

<template>
    <div class="camSettingsBody">
        <div class="camSettingsTopWrapper">
            <p class="interbold16"> {{ props.camSlotName }} </p>
            <div class="camSettingsOptionsWrapper">
                <div class="iconWrapper">
                    <img class="icon" src="/src/assets/icons/microphoneOn.svg">                     
                </div>
                <div class="iconWrapper">
                    <img class="icon" src="/src/assets/icons/monitorOn.svg">           
                </div>
                <div class="iconWrapper">
                    <img class="icon" src="/src/assets/icons/cameraOn.svg">                                                
                </div>
            </div>
        </div>
        <div class="camSettingsCam">
            <Button label="get" @click="before()" />
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
}

.camSettingsCam{
    display: flex;
    width: 30rem;
    height: 16.875rem;
    padding: 0.5rem 8rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

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
}

</style>