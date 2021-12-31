import { useState, useEffect} from 'react'
import { getGifs } from '../services/getGifs';

const useGetGifs = ({keyword} = {keyword: null}) => {

  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

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
    } ,[keyword]
  )

  return {loading, gifs}
}

export {useGetGifs}