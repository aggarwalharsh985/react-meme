import axios from "axios";
import { useState , useEffect } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {

    const [gif , setGif] = useState("");

    async function fetchData() {
        // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        
        console.log("printing");
        console.log(imageSource);
        setGif(imageSource);
    }

    useEffect(() => {
        fetchData();
    },[])

    return {gif, fetchData};

}
export default useGif;