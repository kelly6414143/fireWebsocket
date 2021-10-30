import { io } from "socket.io-client";

export let selfId = "4866ef9d-eb61-4926-aae0-4fd8b2c2a277"

let socket = io("https://l8-upgrade-ws-api1.herokuapp.com/", {
    reconnectionDelayMax: 10000,
    extraHeaders: {
        "user_info": JSON.stringify({
            id: selfId,
            name: 'Kelly'
        })
    }
});


socket.on("connect", () => {
    if(socket.connected){
        console.log("socket connected")
    }
});

socket.on("disconnect", () => {
    socket.connect();
});

export default socket