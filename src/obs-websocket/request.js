import { useOBSStore } from '@/store';
import { obsConnection, errorHandler } from '@/obs-websocket/index';

async function requestScenes() {
    try {
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

async function getAllSceneNames() {
    try {
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
        await requestScenes();

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

async function getSceneItemsListLength(scene) {
    try {
        await requestScenes();
        const store = useOBSStore();
        const response = await obsConnection.call('GetSceneItemList', {sceneName: scene});
        const sceneItems = response.sceneItems;
        return sceneItems.length;
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
    requestScenes,
    getIndexOfScene,
    getNameOfScene,
    getCurrentSceneName,
    getCurrentSceneIndex,
    getAllSceneNames,
    setCurrentScene,
    getNumberOfScenes,
    getSceneItems,
    getSceneItemsListLength,
};
