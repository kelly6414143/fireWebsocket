import React from 'react';
import {createClassName} from "../tool";
import IOSocket from '../tool/websocket'

const Center = ({question = {}}) =>{

    const onGiveUp = () => {
        IOSocket.emit("giveUp")
    }

    return <>
        <div className={"relative flex justify-center items-center h-1/3 border p-2"}>
            <span className={"absolute top-2 left-2 text-blue-400"} onClick={onGiveUp}>放棄</span>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"text-6xl font-bold mb-3"}>{question.title}</div>
                <div className={"text-gray-400"}>{question.description}</div>
            </div>
        </div>
        <div className={"h-2/3 pt-5"}>
            <div className={"h-full border overflow-y-auto p-2"}>
                {
                    question.contents && question.contents.length> 0 && question.contents.map((el, i)=>{
                        return <div key={i}>
                            <span className={createClassName({
                                "bg-yellow-500": el.match
                            })}>{el.name}</span></div>
                    })
                }
            </div>
        </div>
    </>
}

export default Center