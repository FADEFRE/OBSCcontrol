<script setup>
import { connectToObs, disconnectFromObs, requestScenes } from '@/obs-websocket';
import Button from 'primevue/button';



</script>


<template>
    <div class="setup">
      <h1>This is an setup page</h1>
      <Button label="Connect" @click="connectToObs" />
      <Button label="Disconnect" @click="disconnectFromObs" />
      <Button label="Scenes" @click="requestScenes" />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>