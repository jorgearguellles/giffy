import { Link } from "wouter";
import "./Gif.css";

const Gif = ({ id, title, url}) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>
  )
}

export { Gif };
