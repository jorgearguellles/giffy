import { useGlobalGifs } from "../../hooks/useGlobalGifs";
import { Gif } from "../../components/Gif";

const Detail = ({params}) => {
  const gifs = useGlobalGifs()
  console.log("Gifs:", gifs)

  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log("gif:", gif)

  return <Gif {...gif}/>
};

export {Detail}
