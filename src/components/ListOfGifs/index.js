import { Gif } from "../Gif";

const ListOfGifs = ({gifs}) => {

  return (
    <div className="ListOfGifs">
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
    </div>
  )
}

export {ListOfGifs}
