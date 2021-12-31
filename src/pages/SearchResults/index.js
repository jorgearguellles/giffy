import { ListOfGifs } from "../../components/ListOfGifs";
import { Spinner } from "../../components/Spinner";
import { useGetGifs } from '../../hooks/useGetGifs';

const SearchResults = ({params}) => {
  const { keyword } = params;
  const {loading, gifs} = useGetGifs({keyword});

  return (
    <>
      {
        loading
          ? <Spinner />
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}

export {SearchResults}