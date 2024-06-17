<script setup>
import { connectToObs } from '@/obs-websocket';
import { ref, onBeforeMount } from "vue";
import { 
  requestScenes,
  setCurrentScene,
  getAllSceneNames,
  getSceneItems, } from '@/obs-websocket/request';

let sceneList = []
const sceneRef = ref([])


onBeforeMount(() => {
  requestScenes()
  getScenes()
})

async function getScenes() {
  await connectToObs();
  sceneList = await getAllSceneNames()
  sceneRef.value = sceneList
  console.log(sceneList)
}

async function button(scene) {
  await setCurrentScene(scene)
  await getSceneItems(scene)
}

</script>




<template>
  <div class="about">
    <Button label="reconnect" @click="getScenes()" />
    <div class="scene-list">
      <div v-for="scene in sceneRef">
        <Button @click="button(scene)">
          <p>{{ scene }}</p>
        </Button>
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
