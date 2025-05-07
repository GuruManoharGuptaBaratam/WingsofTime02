import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import Help from './Pages/Help';
import About from './Pages/About';
import GetStarted from './Pages/GetStarted'
import ProfileIcon from './Pages/Profile';
import Search from './Pages/Search';


function App() {
  return (

    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/GetStarted' element={<GetStarted/>}/>
      <Route path='/Profile' element={<ProfileIcon/>}/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>

  );
}

export default App;