import { Gif } from "../Gif";
import { Spinner } from "../Spinner";
import { useGetGifs} from "../../hooks/useGetGifs";

const ListOfGifs = ({gifs}) => {
  const {loading} = useGetGifs();

  return (
    <div className="ListOfGifs">
      {
        loading
          ? <Spinner />
          : gifs.map(({id, url, title}) => 
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
