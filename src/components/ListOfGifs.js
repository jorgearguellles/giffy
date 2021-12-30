import { useState, useEffect } from 'react';
import { getGifs } from "../services/getGifs";
import { Gif } from "./Gif";

const ListOfGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function(){
      getGifs( {keyword} )
      .then(gifs => setGifs(gifs))
    } ,[keyword]
  )

  return gifs.map(({id, url, title}) => 
    <Gif 
      title={title}
      id={id}
      url={url}
      key={id}
    />
  )
}

export {ListOfGifs}
