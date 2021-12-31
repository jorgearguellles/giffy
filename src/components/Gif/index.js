import "./Gif.css";
import { Link } from "wouter";

const Gif = ({ id, title, url}) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} key={id} className='Gif-link'>
        <img src={url} alt={title} title={title} loading="lazy" />
        <p>{title ? title : 'Funny Title'}</p>
      </Link>
    </div>
  )
}

export { Gif };
