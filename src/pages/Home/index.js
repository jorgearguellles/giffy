import { Link } from "wouter";

const POPULAR_GIFS = ["matrix", "pokemon", "colombia"];

const Home = () => {
  return (
    <>
      <h3 className='App-title'>Gifs populares</h3>
      <ul>
        {
          POPULAR_GIFS.map((popularGif) => {
            <li key={popularGif} className='gif-popular'>
              <Link to={`/search/${popularGif}`}>
                Gifs de ${popularGif}
              </Link>
            </li>
          })
        }
      </ul>
    </>
  )
}

export {Home}
