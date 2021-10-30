import React, {useEffect, useState} from 'react';
import {createClassName} from "../tool";
import IOSocket, {selfId} from '../tool/websocket'

let id = null
const Left = ({message, users, startTime}) =>{
    const [userState, setUserState] = useState([])
    // console.log("startTime", startTime)

    useEffect(()=>{
        switch (message.type){
            case "ANSWER":
            case "GIVE_UP":
                if(message.id === id) return
                onChangeUsers(message)
                break
            default:
                break
        }
    },[message])

    useEffect(()=>{
        setUserState(users)
    },[users])

    const onChangeUsers = (msg) => {
        id = msg.id
        let arr = []
        users.forEach((el)=>{
            if(el.id === (msg.from.id)){
                el.score += msg.score
            }
            arr.push(el)
        })
        setUserState(arr)
    }

    const onGiveThumb = (type, userID) => {
        IOSocket.emit("bless", {
            type: type,
            userId: userID, // 傳給誰
        })
    }

    return <>
        <div className={"text-5xl font-bold mt-3 mb-1 text-center"}>45:55</div>
        <div className={"flex flex-col justify-center px-5 py-2 overflow-y-auto"}>
            {
                userState.map((el,i)=>{
                    return<div className={"flex items-center my-3"} key={i}>
                        <div className={"relative w-10 h-10 mr-3"}>
                            <span className={"absolute -top-2 -left-2 w-5 h-5 border rounded-full bg-yellow-500 flex justify-center items-center text-xs text-white"}>{i+1}</span>
                            <span className={"inline-block w-full h-full flex justify-center items-center border rounded-full"}>{el.name.slice(0,2)}</span>
                            <span className={createClassName({
                                "absolute bottom-0 right-0 w-1.5 h-1.5 border rounded-full": true,
                                "bg-gray-500": !el.online,
                                "bg-green-500": el.online,
                            })}/>
                        </div>
                        <div>
                            <div>{el.name} {el.score}分</div>
                            {
                                el.id !== selfId &&  <div className={"flex items-center text-xs"}>
                                <span className={"mr-2 text-blue-500"} onClick={()=>{
                                    onGiveThumb("GOOD", el.id)}
                                }>點讚</span>
                                    <span className={"text-gray-500"} onClick={()=>{
                                        onGiveThumb("BAD", el.id)}
                                    }>倒讚</span>
                                </div>
                            }
                        </div>
                    </div>
            })
            }
        </div>
    </>
}

export default Left