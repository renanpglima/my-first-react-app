import {BrowserRouter, Switch, Route} from 'react-router-dom'

//components
import NavBar from './components/NavBar.js';

//pages
import Home from './pages/home/Home.js';
import Create from './pages/create/Create.js';
import Recipe from './pages/recipe/Recipe.js';
import Search from './pages/search/Search.js';

//style
import './App.css'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
