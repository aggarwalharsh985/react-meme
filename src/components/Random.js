import useGif from "../hook/hook";

const Random = () => {
    
    const { gif, fetchData } = useGif();
    const clickHandler = () => {
        fetchData();
    }

    return (
        <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5    mt-[15px]">
            <h1 className="text-3xl uppercase underline font-bold">A Random GIF</h1>

            <img src={gif} width="450px" />
            <button 
                onClick={clickHandler}
                className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
                >
                Generate
            </button>
        </div>
    )
}
export default Random;
