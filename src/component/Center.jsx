import React from 'react';

const Center = () =>{
    return <>
        <div className={"relative flex justify-center items-center h-1/3 border"}>
            <span className={"absolute top-2 left-2 text-blue-400"}>放棄</span>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"text-6xl font-bold mb-3"}>題目</div>
                <div className={"text-gray-400"}>簡述</div>
            </div>
        </div>
        <div className={"h-2/3 pt-5"}>
            <div className={"h-full border overflow-y-auto"}>

            </div>

        </div>
    </>
}

export default Center