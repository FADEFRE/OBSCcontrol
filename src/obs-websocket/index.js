import OBSWebSocket from 'obs-websocket-js';
import { useOBSStore } from '@/store';

const obsConnection = new OBSWebSocket();
let counter = 0;

async function connectToObs() {
    try {
        await obsConnection.connect('ws://192.168.178.38:4455');
        //await obsConnection.connect('ws://127.0.0.1:4455');
        console.log('Connected to server')
        const store = useOBSStore()
        store.setStatus(true)
        counter = 0;
    } catch (error) {
        console.error('Failed to connect', error.code, error.message);
    }
}

async function disconnectFromObs() {
    await obsConnection.disconnect();
    const store = useOBSStore()
    store.setStatus(false)
    console.log("disconnected");
}


async function errorHandler(error) {
    const store = useOBSStore()
    store.setStatus(false)
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
    disconnectFromObs
};