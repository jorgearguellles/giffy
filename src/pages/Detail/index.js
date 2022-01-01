import { useContext } from "react";
import { StaticContext } from "../../context/StaticContext";

const Detail = ({params}) => {
  const context = useContext(StaticContext)
  console.log("context",context)
  console.log("Id Gif:",params.id)
  return <h2>Gif on id: {params.id}</h2>
};

export {Detail}
