import React, {useEffect, useState} from 'react';
import {createClassName} from "../tool";
import IOSocket from '../tool/websocket'

const Center = ({question = {}, message}) =>{

    const [questionState, setQuestionState ] = useState({})

    useEffect(()=>{
        onChangeQuestion(question)
    },[question])

    useEffect(()=>{
        switch (message.type){
            case "ANSWER":
            case "GIVE_UP":
                message.newQuestion && onChangeQuestion(message.newQuestion)
                break
            default:
                break
        }
    },[message])

    const onChangeQuestion = (item) => {
        if(!item.matches || !item.contents) return
        let matchMap = new Map()
        item.matches.map(item=>{
            matchMap.set(item, item)
        })
        const newContents = item.contents.map((el)=>{
            if(matchMap.has(el.id)){
                return {...el, match: true}
            }else{
                return {...el, match: false}
            }
        })
        setQuestionState({...item, contents: newContents})
    }

    const onGiveUp = () => {
        IOSocket.emit("giveUp")
    }

    return <>
        <div className={"relative flex justify-center items-center h-1/3 border p-2"}>
            <span className={"absolute top-2 left-2 text-blue-400"} onClick={onGiveUp}>放棄</span>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"text-6xl font-bold mb-3"}>{questionState.title}</div>
                <div className={"text-gray-400"}>{questionState.description}</div>
            </div>
        </div>
        <div className={"h-2/3 pt-5"}>
            <div className={"h-full border overflow-y-auto p-2"}>
                {
                    questionState.contents && questionState.contents.length> 0 && questionState.contents.map((el, i)=>{
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