import { useState, useEffect } from 'react';
import { getGifs } from "../../services/getGifs";
import { Gif } from "../Gif";

const ListOfGifs = ({params}) => {
  const { keyword } = params;
  
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function(){
      setLoading(true)
      getGifs( {keyword} )
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
    } ,[keyword]
  )

  if(loading) return <i>Cargando ...</i>

  return (
    <>
      {
        gifs.map(({id, url, title}) => 
          <Gif 
            title={title}
            id={id}
            url={url}
            key={id}
          />
        )
      }
    </>
  )
}

export {ListOfGifs}
