import React from 'react'
import Home from './home'
import PostAd from './components/postad'
import {BrowserRouter as Router , Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/postad" exact component={PostAd} />
    </Router>
  );
}

export default App;
