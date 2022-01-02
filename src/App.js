import './App.css';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { SearchResults } from './pages/SearchResults';
import { StaticContext } from './context/StaticContext';
import { Link, Route } from "wouter";
import { GifsContextProvider} from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'midudev',
        susbcribe: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>Giffy</h1>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/search/:keyword" component={SearchResults} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
