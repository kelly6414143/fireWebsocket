import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Left from "./component/Left"
import Center from "./component/Center"
import Right from "./component/Right"
import IOSocket from './tool/websocket'
import "./index.css"

const App = () =>{

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])
    const [users, setUsers] = useState([])
    const [question, setQuestion] = useState({})
    const [startTime, setStartTime] = useState("")


    IOSocket.on("connection", (...args) => {
        // console.log("connection", args)
        let matchMap = new Map()
        setMessages(args[0].messages)
        setUsers(args[0].users)

        args[0].question.matches.map(item=>{
            matchMap.set(item, item)
        })
        const newContents = args[0].question.contents.map((el)=>{
            if(matchMap.has(el.id)){
                return {...el, match: true}
            }else{
                return {...el, match: false}
            }
        })
        setQuestion({...args[0].question, contents: newContents})
        setStartTime(args[0].startDateTime)
    });

    IOSocket.on("messages", (...args) => {
        // console.log("messages", args)
        args.forEach(el=>{
            onHandleSetMsg(el)
            setMessage(el)
        })
    });

    const onHandleSetMsg = (el) => {
        // switch (el.type){
        //     default:
                setMessages([...messages, {type: el.type, dateTime: el.dateTime, message: el.message}])
                // break
        // }
    }


    return <div className={"h-screen p-5"}>
        <div className={"flex h-full"}>
            <div className={"w-1/5"}><Left users={users} startTime={startTime} message={message}/></div>
            <div className={"w-2/5"}><Center question={question}/></div>
            <div className={"w-2/5"}><Right messages={messages}/></div>
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));