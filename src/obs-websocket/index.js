import OBSWebSocket from 'obs-websocket-js';

const obsConnection = new OBSWebSocket();

async function connectToObs() {
    try {
        await obsConnection.connect('ws://127.0.0.1:4455');
        console.log(`Connected to server`)
        } catch (error) {
            console.error('Failed to connect', error.code, error.message);
        }
}

async function disconnectFromObs() {
    await obsConnection.disconnect();
}

async function requestScenes() {
    const scenes = await obsConnection.call('GetSceneList');
    console.log(scenes);
    if (scenes.currentProgramSceneName != null) {
        
    }
}


export {
    obsConnection,
    connectToObs,
    disconnectFromObs,
    requestScenes,
};