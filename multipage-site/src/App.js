import './App.css'
import {BrowserRouter, Route, NavLink, Routes, Navigate} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/content">Content</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/content" element={<Content/>}/>
          <Route path="/articles/:id" element={<Article />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App