import React from 'react';

const Right = () =>{
    return <div className={"h-full pl-5"}>
        <div className={"relative h-full border"}>
            <div className={"h-4/5 px-5 py-3 overflow-y-auto"}>
                <div>2021/10/24 16:20:20 系統通知</div>
            </div>
            <div className={"absolute bottom-3 left-1/2 transform -translate-x-1/2"}>
                <div className={"flex justify-center items-center px-5 py-2 border"}>
                    <input className={"w-52 mr-2"} type="text"/>
                    <div className={"whitespace-nowrap"}>送出</div>
                </div>
            </div>
        </div>
    </div>
}

export default Right