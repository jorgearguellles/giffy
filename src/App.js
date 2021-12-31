import './App.css';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { SearchResults } from './pages/SearchResults';
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>Giffy</h1>
        </Link>
        <Route path="/" component={Home} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
