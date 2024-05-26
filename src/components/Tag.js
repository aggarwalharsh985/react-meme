import React, {useState} from "react";
import useGif from "../hook/hook";

const Tag = () => {

    const [tag , setTag] = useState("car")
    const { gif , fetchData } = useGif();
    const clickHandler = () => {
        fetchData();
    }

    return (
        <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5    mt-[15px]">
            <h1 className="text-3xl uppercase underline font-bold">A Random GIF</h1>
            <img src={gif} width="450px" />

            <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag} />

            <button 
                onClick={clickHandler}
                className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
                >
                Generate
            </button>
        </div>
    )
}
export default Tag;
