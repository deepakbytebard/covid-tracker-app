import logo from './logo.svg';
import './App.css';
import Header from './Components/Global';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Content from './Components/Content';
import Country from './Components/Country';
import React from 'react';
import Global from './Components/Global';

function App() {
  return (
    <React.Fragment>

    <Router>
     
      <Routes classname="routes">

      <Route path="/" element={<Global/>}/>
      <Route path="/continent" element={<Content/>}/>

      <Route path="/country" element={<Country/>}/>
      </Routes>

    </Router>
    </React.Fragment>
  );
}

export default App;
