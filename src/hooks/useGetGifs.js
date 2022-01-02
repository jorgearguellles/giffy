import { useState, useEffect, useContext} from 'react'
import { getGifs } from '../services/getGifs';
import { GifsContext } from "../context/GifsContext";

const useGetGifs = ({keyword} = {keyword: null}) => {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContext);

  useEffect(
    function(){
      setLoading(true)
      // Recuperamos la keywword del local storage
      let keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
      getGifs( { keyword: keywordToUse } )
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // Guardamos la Keyword en el local storage
        localStorage.setItem('lastKeyword', keyword)
      })
    } ,[keyword, setGifs]
  )

  return {loading, gifs}
}

export {useGetGifs}