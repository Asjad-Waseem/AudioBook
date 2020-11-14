import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/DashboardComponents/Dashboard/Home';
import AudioBooks from './Components/DashboardComponents/AudioBooks/AudioBooks.jsx';
import Reviews from './Components/DashboardComponents/Reviews/Reviews.jsx';
import Settings from './Components/DashboardComponents/Settings/Settings.jsx';
import { initialState, reducer, StateProvider } from './globalStateContext';

function App() {

  return (   

      <Router>

      <StateProvider initialState={initialState} reducer={reducer}>

      <div className="App">

      <Route exact path = "/" component = {Home} />
      <Route exact path = "/AudioBooks" component = {AudioBooks} />
      <Route exact path = "/Reviews" component = {Reviews} />
      <Route exact path = "/Settings" component = {Settings} />

      </div>

      </StateProvider>

      </Router>

);
}

export default App;
