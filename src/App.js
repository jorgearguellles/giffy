import './App.css';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { SearchResults } from './pages/SearchResults';
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/" component={Home} />
        <Route path="/gif/:id" component={Details} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default App;
