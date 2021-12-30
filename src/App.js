import './App.css';
import { ListOfGifs } from './components/ListOfGifs';
import { Route, Link } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Busca tu Gif favotiro</h1>
        <Link to='/gif/colombia' >Gifs de Colombia</Link>
        <Link to='/gif/chile' >Gifs de Chile</Link>
        <Link to='/gif/holanda' >Gifs de Holanda</Link>
        <Link to='/gif/nigeria' >Gifs de Nigeria</Link>
        <Link to='/gif/newzeland' >Gifs de Nueva Zelanda</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
