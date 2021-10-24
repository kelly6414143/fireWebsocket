import React from 'react';

const Left = () =>{
    return <>
        <div className={"text-5xl font-bold mt-3 mb-1 text-center"}>45:55</div>
        <div className={"flex flex-col justify-center px-5 py-2 overflow-y-auto"}>
            <div className={"flex items-center my-3"}>
                <div className={"relative w-10 h-10 mr-3"}>
                    <span className={"absolute -top-2 -left-2 w-5 h-5 border rounded-full bg-yellow-500 flex justify-center items-center text-xs text-white"}>1</span>
                    <span className={"inline-block w-full h-full flex justify-center items-center border rounded-full"}>女</span>
                    <span className={"absolute bottom-0 right-0 w-1.5 h-1.5 border rounded-full bg-green-300"}/>
                </div>
                <div>ddd</div>
            </div>
            <div className={"flex items-center my-3"}>
                <div className={"relative w-10 h-10 mr-3"}>
                    <span className={"absolute -top-2 -left-2 w-5 h-5 border rounded-full bg-yellow-500 flex justify-center items-center text-xs text-white"}>2</span>
                    <span className={"inline-block w-full h-full flex justify-center items-center border rounded-full"}>女</span>
                    <span className={"absolute bottom-0 right-0 w-1.5 h-1.5 border rounded-full bg-green-300"}/>
                </div>
                <div>eee</div>
            </div>
        </div>
    </>
}

export default Left