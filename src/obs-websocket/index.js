import OBSWebSocket from 'obs-websocket-js';

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


export {
    obsConnection,
    errorHandler,
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