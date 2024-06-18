<script setup>
import { connectToObs } from '@/obs-websocket/index';
import { ref, onBeforeMount,toRaw  } from "vue";
import { 
  requestScenes,
  setCurrentScene,
  getAllSceneNames,
  getSceneItems, } from '@/obs-websocket/request';
import { setSceneItemActive } from '@/obs-websocket/buttonLogic';

let sceneList = []
const sceneRef = ref([])

let viewOptions = []
const viewOptionsRef = ref([])
const selectedView = ref()

onBeforeMount(() => {
  before()
})

async function before() {
    await connectToObs()
    await requestScenes()
    sceneList = await getAllSceneNames()
    sceneRef.value = sceneList
    viewOptions = await getSceneItems("4_Cam_Grid")
    viewOptionsRef.value = viewOptions
}

async function button(scene) {
  await setCurrentScene(scene)
  await getSceneItems(scene)
}

async function setSelectedView() {
  const raw = toRaw(selectedView.value)
  await setSceneItemActive("4_Cam_Grid", raw.name)
}

</script>




<template>
  <div class="about">
    <Button label="reconnect" @click="before()" />
    <div class="scene-list">
      <div v-for="scene in sceneRef">
        <Button @click="button(scene)">
          <p>{{ scene }}</p>
        </Button>
        <Dropdown 
          v-model="selectedView" 
          :options="viewOptionsRef"
          @change="setSelectedView" 
          optionLabel="name" 
          placeholder="Select View" 
          class="camSettingsDropdown" 
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
