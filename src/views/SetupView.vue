<script setup>
import { 
  connectToObs, 
  disconnectFromObs, 
  requestScenes,
  getIndexOfScene,
  getNameOfScene,
  getCurrentSceneName,
  getCurrentSceneIndex,
  getAllSceneNames,
  } from '@/obs-websocket';
import { ref } from "vue";

const value1 = ref();
const value2 = ref();


async function run() {
  getAllSceneNames;
}

</script>


<template>
    <div class="setup">
      <h1>This is an setup page</h1>
      <Button label="Connect" @click="connectToObs" />
      <Button label="Disconnect" @click="disconnectFromObs" />
      <Button label="Scenes" @click="requestScenes" />
      <Button label="current" @click="getCurrentSceneName" />
      <Button label="currentInd" @click="getCurrentSceneIndex" />
      <div >
      <InputText type="text" v-model="value1" />
      <Button label="get Index" @click="getIndexOfScene(value1)" />
      </div>
      <div >
        <InputText type="text" v-model="value2" />
        <Button label="get Name" @click="getNameOfScene(value2)" />
      </div> 
      <Button label="All Scenes" @click="run" />
      <div >
        <RouterLink to="/scenes">All Scenes</RouterLink>
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