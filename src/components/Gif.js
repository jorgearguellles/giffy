import "./Gif.css";

const Gif = ({ id, title, url}) => {
  return (
    <a href={`#${id}`} key={id} className='Gif'>
      <h3>{title ? title : 'Funny Title'}</h3>
      <img src={url} alt={title} />
    </a>
  )
}

export { Gif };
