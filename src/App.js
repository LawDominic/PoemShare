import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import poemServices from './services/poems.js';
import Home from './pages/home'
import AddPoem from './pages/addpoem'
import Poems from './pages/poems'

const mainStyle = {
  textAlign: 'center',
}

function App() {

  const [poems, setPoems] = useState([])

  const addPoem = (newPoem) => {
    console.log(newPoem);
    poemServices.create(newPoem)
      .then(object => {
        console.log("POST response", object)
        setPoems([poems.concat(object)])
        console.log(poems)
      })
  }

  const fetchPoems = () => {
    poemServices.getAll()
    .then(objects => {
      console.log("response: ", objects)
      setPoems(objects)
    })
  }

  useEffect(() => {
    fetchPoems()
  }, [])

  return (
    <div style={mainStyle} className="App">
      <Router forceRefresh={true}>
        <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/addpoem">Add Poem</Link>
        </div>

        <Switch>
          <Route path="/poems/:id"><Poems poems={poems}/></Route>
          <Route path="/addpoem"><AddPoem addPoem={addPoem}/></Route>
          <Route path="/"><Home poems={poems} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
