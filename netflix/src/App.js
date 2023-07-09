
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Movies from './Components/Home/Movies';
import TVShows from './Components/Home/TVShows';
import Recentm from './Components/Home/Recentm';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvshows" element={<TVShows/>}/>
        <Route path="/recent" element={<Recentm/>}/>     
      </Routes>
    </Router>
    
  );
}

export default App; 
