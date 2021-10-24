import React from 'react';
import ReactDOM from 'react-dom';
import Left from "./component/Left"
import Center from "./component/Center"
import Right from "./component/Right"
import "./index.css"

const App = () =>{
    return <div className={"h-screen p-5"}>
        <div className={"flex h-full"}>
            <div className={"w-1/5"}><Left/></div>
            <div className={"w-2/5"}><Center/></div>
            <div className={"w-2/5"}><Right/></div>
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));