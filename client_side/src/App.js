import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_nav from './components/home_nav'
import Home from './pages/home'
import PlayerList from './pages/playerslist'
import About from './pages/about'
import Feedback from './pages/feedback'
import Manager_nav from './components/manager_nav'
import Manager from './pages/manager'
import Contestant from './pages/contestant'
import Contest_nav from './components/contest_nav'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home_nav/>}>
          <Route path='/' element={<Home />} />
          <Route path='/playerlist' element={<PlayerList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
        </Route>
        <Route path='/manager' element={<Manager_nav/>}>
          <Route path='/manager' element={<Manager/>}/>
        </Route>
        < Route path='contestant/:id' element={<Contest_nav/>}>
          <Route path='/contestant/:id' element={<Contestant/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  </>
  );
}

export default App;
