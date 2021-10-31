import { io } from "socket.io-client";

export let selfId = "8da01334-56e7-4654-9985-68c52402f14c"

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