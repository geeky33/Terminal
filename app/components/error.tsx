"use client"
import {FC} from "react";
interface propType{
    command:string,
}
let Error:FC<propType>=({command})=>{
    return(
        <div className={"flex flex-col"}>
            <p className="dollar">$<span className=" text-white ">  {command}</span></p>
            <p>bash: {command}: command not found</p>
        </div>
    )
}
export default Error;