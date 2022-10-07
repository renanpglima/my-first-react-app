import './App.css'

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/content">Content</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/content">
          <Content />
        </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App