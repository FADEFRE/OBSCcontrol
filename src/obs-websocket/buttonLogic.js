import { obsConnection, errorHandler } from '@/obs-websocket/index';
import { 
    getSceneItems,
    getSceneItemsListLength,
    requestScenes,
        } from '@/obs-websocket/request';

async function setSceneItemActive(scene, itemName) {
    try {
        await requestScenes();

        const formattedItems = await getSceneItems(scene)
        const itemId = await getSceneItemId(scene, itemName)
        const length = await getSceneItemsListLength(scene)

        for (let index = 0; index < length; index++) {
            const disableItem = formattedItems[index];
            await obsConnection.call('SetSceneItemEnabled', {sceneName: scene, sceneItemId: disableItem.sceneItemId, sceneItemEnabled: false});
        }

        await obsConnection.call('SetSceneItemEnabled', {sceneName: scene, sceneItemId: itemId, sceneItemEnabled: true});

    } catch(error) {
        errorHandler(error);
    }
}

async function getSceneItemId(scene, itemName) {
    try {
        await requestScenes();
        const response = await obsConnection.call('GetSceneItemId', {sceneName: scene, sourceName: itemName, searchOffset: 0});
        return response.sceneItemId;
    } catch(error) {
        errorHandler(error);
    }
}


export {
    setSceneItemActive,
    getSceneItemId,
}