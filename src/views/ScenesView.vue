<script setup>
import { 
  requestScenes,
  setCurrentScene,
  } from '@/obs-websocket';
import { ref, onBeforeMount } from "vue";

const value1 = ref();
const value2 = ref();

const sceneList = ref([]);


onBeforeMount(() => {
  requestScenes()
  .then(data => {
      sceneList.value = data
      console.log(sceneList.value)
    })
})


</script>




<template>
  <div class="about">
    <div class="scene-list">
      <div v-for="scene in sceneList">
        {{ scene.sceneName }}
        <Button label="switch" @click="setCurrentScene(scene.sceneName)"/>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
