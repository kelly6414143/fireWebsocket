import React, {useEffect, useState, useRef} from 'react';
import {createClassName} from "../tool/index"
import IOSocket from '../tool/websocket'

const Right = ({messages}) =>{

    const [inputVal, setInputVal] = useState("")

    const scrollRef = useRef(null)

    useEffect(()=>{
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    },[messages])

    const onSubmit = ()=>{
        const val = inputVal.toString()
        IOSocket.emit("answer", inputVal)
        // IOSocket.emit("message", inputVal)
        // console.log(inputVal)
        setInputVal("")
    }

    return <div className={"h-full pl-5"}>
        <div className={"relative h-full border flex flex-col"}>
            <div ref={scrollRef} className={"flex-1 px-5 my-3 overflow-y-auto"}>
                {
                    messages.map((el, i)=>{
                        return <div key={i} className={createClassName({
                            "text-green-500": el.type === "JOIN" || (el.type === "ANSWER" && el.pass),
                            "text-red-500": el.type === "LEAVE"|| (el.type === "ANSWER" && !el.pass),
                            "bg-red-500 text-white": el.type === "GIVE_UP"
                        })}>{el.dateTime} {el.message}</div>
                    })
                }
            </div>
            <div>
                <div className={"flex justify-center items-center px-5 py-2 border-t"}>
                    <input value={inputVal} className={"w-52 mr-2 border"} type="text" onChange={(val)=>{setInputVal(val.target.value)}}/>
                    <div className={"whitespace-nowrap"} onClick={onSubmit}>送出</div>
                </div>
            </div>
        </div>
    </div>
}

export default Right