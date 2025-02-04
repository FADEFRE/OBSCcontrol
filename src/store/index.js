import { defineStore } from 'pinia';

export const useOBSStore = defineStore('obs', {
    state: () => ({
        currentScene: "",
        listOfScenes: [null],
        numberOfScenes: 0,
        status: false,
        currentSound: "",
        wasClicked: false,
    }),
    
    persist: {
        storage: sessionStorage,
    },

    getters: {
        getCurrentScene() { return this.currentScene },
        getListOfScenes() { return this.listOfScenes },
        getNumberOfScenes() { return this.numberOfScenes },
        getStatus() { return this.status },
        getCurrentSound() { return this.currentSound },
        wasButtonClicked() { return this.wasClicked },
    },

    actions: {
        setCurrentScene(currentScene) { this.currentScene = currentScene },
        setListOfScenes(listOfScenes) { this.listOfScenes = listOfScenes },
        setNumberOfScenes(numberOfScenes) { this.numberOfScenes = numberOfScenes },
        setStatus(status) { this.status = status },
        setCurrentSound(currentSound) { this.currentSound = currentSound },
        Clicked() { this.wasClicked = true },
        removeClicked() { this.wasClicked = false },
        getIndexOfScene(requestedSceneName) { 
            if (this.numberOfScenes > 0) {
                for (let index = 0; index < this.numberOfScenes; index++) {
                    const scene = this.listOfScenes[index];
                    if (scene.sceneName === requestedSceneName) {
                        return scene.sceneIndex;
                    }
                }
            } 
        },
    },
})