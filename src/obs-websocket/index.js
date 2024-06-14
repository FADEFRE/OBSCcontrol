import OBSWebSocket from 'obs-websocket-js';
import { useOBSStore } from '@/store';

const obsConnection = new OBSWebSocket();
let counter = 0;

async function connectToObs() {
    try {
        await obsConnection.connect('ws://127.0.0.1:4455');
        console.log(`Connected to server`)
        counter = 0;
    } catch (error) {
        console.error('Failed to connect', error.code, error.message);
    }
}

async function disconnectFromObs() {
    await obsConnection.disconnect();
    console.log("disconnected");
}

async function requestScenes() {
    try {
        await connectToObs()
        const response = await obsConnection.call('GetSceneList');
        console.log(response);
        const store = useOBSStore();
        if (response.currentProgramSceneName != null) {
            store.setCurrentScene(response.currentProgramSceneName);

        }
        if (response.scenes != null) {
            store.setListOfScenes(response.scenes);
            store.setNumberOfScenes(response.scenes.length)
        }
        return response.scenes;
    } catch(error) {
        errorHandler(error);
    }
}

async function getIndexOfScene(sceneName) {
    try {
        const store = useOBSStore();
        if (store.getNumberOfScenes > 0) {
            const index = store.getIndexOfScene(sceneName);
            console.log(index);
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function getNameOfScene(sceneIndex) {
    try {
        const response = await obsConnection.call('GetSceneList');
        const scene = response.scenes[sceneIndex];
        const name = scene.sceneName;
        console.log(name)
        return name;
    } catch(error) {
        errorHandler(error);
    }
}

async function getCurrentSceneName() {
    try {
        await requestScenes();
        const store = useOBSStore();
        if (store.getNumberOfScenes > 0) {
            const name = store.getCurrentScene;
            console.log(name);
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function getCurrentSceneIndex() {
    try {
        await requestScenes();
        const store = useOBSStore();
        if (store.getNumberOfScenes > 0) {
            const name = store.getIndexOfScene(store.getCurrentScene);
            console.log(name);
        }
    } catch(error) {
        errorHandler(error);
    }
}


async function errorHandler(error) {
    if (error.message === "Not connected" && counter < 3) {
        counter++;
        console.log("Not connected. Retry: " + counter)
        await connectToObs();
    }
    else {
        console.error('Error', error.code, error.message);
    }
}

async function getAllSceneNames() {
    try {
        await connectToObs();
        await requestScenes();
        const store = useOBSStore();
        const length = store.getNumberOfScenes;
        const arr = [];
        if (length > 0) {
            for (let index = 0; index < length; index++) {
                const name = await getNameOfScene(index);
                arr.push(name);
            }
            console.log("scenes: " + arr)
            return arr;
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function getNumberOfScenes() {
    try {
        await connectToObs();
        await requestScenes();
        const store = useOBSStore();
        const length = store.getNumberOfScenes;
        return length;
    } catch(error) {
        errorHandler(error);
    }
}

async function getSceneItems(scene) {
    try {
        await connectToObs();
        await requestScenes();
        const store = useOBSStore();
        const length = store.getNumberOfScenes;

        let formattedItems = []

        const response = await obsConnection.call('GetSceneItemList', {sceneName: scene});
        const sceneItems = response.sceneItems;
        for (let index = 0; index < sceneItems.length; index++) {
            const item = sceneItems[index];
            const formattedSingleItem = { name: item.sourceName, sceneItemId: item.sceneItemId, isGroup: item.isGroup, isActive: item.sceneItemEnabled }
            formattedItems.push(formattedSingleItem)
        }
        console.log(formattedItems)
        return formattedItems;
    } catch(error) {
        errorHandler(error);
    }
}

async function setCurrentScene(name) {
    try {
        await obsConnection.call('SetCurrentProgramScene', {sceneName: name});
    } catch(error) {
        errorHandler(error);
    }
}

export {
    connectToObs,
    disconnectFromObs,
    requestScenes,
    getIndexOfScene,
    getNameOfScene,
    getCurrentSceneName,
    getCurrentSceneIndex,
    getAllSceneNames,
    setCurrentScene,
    getNumberOfScenes,
    getSceneItems,
};