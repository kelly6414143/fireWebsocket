import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const App = () =>{
    return <div className={"h-screen p-5"}>
        <div className={"flex h-full border"}>
            <div className={"flex-1"}>left</div>
            <div className={"flex-1"}>center</div>
            <div className={"flex-1"}>right</div>
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));