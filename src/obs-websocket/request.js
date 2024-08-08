import { useOBSStore } from '@/store';
import { obsConnection, errorHandler } from '@/obs-websocket/index';

async function requestScenes() {
    try {
        const response = await obsConnection.call('GetSceneList');
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

async function requestNameActiveSceneObs() {
    try {
        const response = await obsConnection.call('GetSceneList');
        const store = useOBSStore();
        if (response.currentProgramSceneName != null) {
            store.setCurrentScene(response.currentProgramSceneName);
            return response.currentProgramSceneName
        }
        return null;
    } catch(error) {
        errorHandler(error);
    }
}

async function getIndexOfScene(sceneName) {
    try {
        const store = useOBSStore();
        if (store.getNumberOfScenes > 0) {
            const index = store.getIndexOfScene(sceneName);
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
            return name;
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
            const index = store.getIndexOfScene(store.getCurrentScene);
            return index;
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
        return formattedItems;
    } catch(error) {
        errorHandler(error);
    }
}

async function getSceneItemsListLength(scene) {
    try {
        await requestScenes();
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

async function muteAll() {
    try {
        const people = await getSceneItems("Slot_1")
        for (let index = 0; index < people.length; index++) {
            const personScene = people[index];
            const partsOfPerson = await getSceneItems(personScene.name)
            for (let index = 0; index < partsOfPerson.length; index++) {
                const element = partsOfPerson[index];
                try {
                    await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: true});
                } catch (error) {

                }
            }
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function getNameOfActiveInScene(slot) {
    try {
        const people = await getSceneItems(slot)
        for (let index = 0; index < people.length; index++) {
            const element = people[index];
            if (element.isActive) {
                return element.name
            }
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function unMuteAllOfPerson(slot) {
    try {
        await muteAll()
        const personSceneName = await getNameOfActiveInScene(slot)
        const partsOfPerson = await getSceneItems(personSceneName)
        for (let index = 0; index < partsOfPerson.length; index++) {
            const element = partsOfPerson[index];
            try {
                await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: false});
            } catch (error) {

            }
        }
    } catch(error) {
        errorHandler(error);
    }
}

async function setAllCurrentActiveAgain() {
    const store = useOBSStore();
    try {
        await requestScenes();
        const currentScene = await requestNameActiveSceneObs()

        if (currentScene === "Solo_Cam_Grid") {
            helperAllCurrentActiveAgain("Solo_Cam_Grid")
        } 
        else {
            const slots = await getSceneItems(currentScene)
            for (let index = 0; index < slots.length; index++) {
                const slot = slots[index];
                console.log(slot.name)

                helperAllCurrentActiveAgain(slot.name)
            }
        }
    
        
    } catch(error) {
        errorHandler(error);
    }
}

async function helperAllCurrentActiveAgain(name) {
    console.log("helper1" + name)
    try {
        console.log("helper1try" + name)
        const people = await getSceneItems(name)
        const nobody = true
        for (let index = 0; index < people.length; index++) {
            const breaker = false
            const personScene = people[index];
            const partsOfPerson = await getSceneItems(personScene.name)
            for (let index = 0; index < partsOfPerson.length; index++) {
                const element = partsOfPerson[index];
                try {
                    const response = await obsConnection.call('GetInputMute', {inputName: element.name});

                    if (response.inputMuted) {
                        await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: true});
                    }
                    else {
                        nobody = false
                        await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: false});
                        store.setCurrentSoundPerson(personScene.name)
                        store.setCurrentSound(name)
                        breaker = true
                    }
                } catch (error) {
    
                }
            }

            if (nobody) {
                store.setCurrentSoundPerson("")
            }
    
            if (breaker) {
                return true
            }
        }
    } catch (error) {
        errorHandler(error, name);
    }
}

async function findAllActiveInObs() {
    try {

        await requestScenes();
        await getCurrentSceneName()
        const currentScene = await requestNameActiveSceneObs()

        const people = await getSceneItems("Slot_1")
        const store = useOBSStore();
        for (let index = 0; index < people.length; index++) {
            const personScene = people[index];
            const partsOfPerson = await getSceneItems(personScene.name)
            for (let index = 0; index < partsOfPerson.length; index++) {
                const element = partsOfPerson[index];
                try {
                    const response = await obsConnection.call('GetInputMute', {inputName: element.name});
                    if (!response.inputMuted) {
                        store.setCurrentSoundPerson(personScene.name)
                    }
                } catch (error) {

                }
            }
        }

        if (currentScene === "Solo_Cam_Grid") {
            helperFindAllActiveInObs("Solo_Cam_Grid")
        } 
        else {
            const slots = await getSceneItems(currentScene)
            for (let index = 0; index < slots.length; index++) {
                const slot = slots[index];
                console.log(slot.name)

                helperFindAllActiveInObs(slot.name)
            }
        }


    } catch(error) {
        errorHandler(error);
    }
}

async function helperFindAllActiveInObs(name) {
    console.log("helper2" + name)
    try {
        console.log("helper2try" + name)
        const people = await getSceneItems(name)
        
        for (let index = 0; index < people.length; index++) {
            const breaker = false
            const personScene = people[index];
            const partsOfPerson = await getSceneItems(personScene.name)
            for (let index = 0; index < partsOfPerson.length; index++) {
                const element = partsOfPerson[index];
                try {
                    const response = await obsConnection.call('GetInputMute', {inputName: element.name});

                    if (response.inputMuted) {
                        await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: true});
                    }
                    else {
                        await obsConnection.call('SetInputMute', {inputName: element.name, inputMuted: false});
                        store.setCurrentSound(name)
                        breaker = true
                    }
                } catch (error) {
    
                }
            }
            if (breaker) {
                return true
            }
        }
    } catch (error) {
        errorHandler(error, name);
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
    muteAll,
    getNameOfActiveInScene,
    unMuteAllOfPerson,
    setAllCurrentActiveAgain,
    findAllActiveInObs,
};
