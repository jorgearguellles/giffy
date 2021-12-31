const Detail = ({params}) => {
  console.log(params.id)
  return <h2>Gif on id: {params.id}</h2>
};

export {Detail}
