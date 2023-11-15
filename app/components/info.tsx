import { FC } from "react";
interface incProps {
    title: string,
    p1: string,
    p2: string,
    p3: string
}
let Info: FC<incProps> = ({ title, p1, p2, p3 }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="dollar" >$<span className=" text-white ">  {title}</span></p>
            <div className="flex flex-col gap-1">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
            </div>
        </div>
    )
}
export default Info;