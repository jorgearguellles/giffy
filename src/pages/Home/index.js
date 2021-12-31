import { useState } from "react";
import { Link, useLocation } from "wouter";
import "./Home.css";
import { useGetGifs } from "../../hooks/useGetGifs";
import { ListOfGifs } from "../../components/ListOfGifs";

const POPULAR_GIFS = ["matrix", "pokemon", "colombia"];

const Home = () => {

  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  const { gifs }= useGetGifs();
  
  const handleSubmit = evt => {
    evt.preventDefault();
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`);
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Search gifs here ..." type='text' value={keyword} />
        <button>Buscar</button>
      </form>
      <h4 className='App-title'>Gifs populares</h4>
      <ul className='list-gifs-populars'>
        {
          POPULAR_GIFS.map((popularGif) => {
            return(
              <li key={popularGif} className='gif-popular'>
                <Link to={`/search/${popularGif}`}>
                  Gifs de {popularGif}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <h4 className='App-title'>Última busqueda</h4>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

export {Home}
