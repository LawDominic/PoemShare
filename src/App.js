import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import poemServices from './services/poems.js';
import Home from './pages/home'
import AddPoem from './pages/addpoem'
import Poems from './pages/poems'

function App() {

  const [poems, setPoems] = useState([])

  useEffect(() => {
    poemServices.getAll()
    .then(object => {
      setPoems(object)
    })
  }, [])

  const addPoem = (newPoem) => {
    poemServices.create(newPoem)
      .then(object => {
        setPoems(poems.concat(object))
      })
  }

  const mobileMenuHandler = (event) => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Router>
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <Link to="/" className="flex items-center py-4 px-2">
                <img src="/images/logo.png" className="h-10 w-10 mr-2" alt="logo" />
                <span className="font-semibold text-gray-900 text-lg hover:text-blue-400">PoemShare</span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                <NavLink exact to={'/'} activeClassName="text-blue-400" className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-300 transition duration-300">Home</NavLink>
                <br/>
                <NavLink to="/addpoem" activeClassName="text-blue-400" className="py-4 px-2 text-gray-900 font-semibold hover:text-blue-300 transition duration-300">Add Poem</NavLink>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={mobileMenuHandler} className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

        <div className="hidden mobile-menu">
          <ul>
          <NavLink exact to={'/'} activeClassName="text-blue-400" className="block text-sm px-2 py-4 text-gray-900 font-semibold hover:bg-gray-100 transition duration-300">Home</NavLink>
          <NavLink to="/addpoem" activeClassName="text-blue-400" className="block text-sm px-2 py-4 text-gray-900 font-semibold hover:bg-gray-100 transition duration-300">Add Poem</NavLink>
          </ul>
        </div>

        <Switch>
          <Route path="/poems/:id"><Poems poems={poems}/></Route>
          <Route path="/addpoem"><AddPoem addPoem={addPoem} poems={poems}/></Route>
          <Route path="/"><Home poems={poems} /></Route>
        </Switch>
      </Router>
      <footer className="absolute inset-x-0 bottom-0 h-14 bg-gray-100">
        Copyright © 2021 All Rights Reserved by <a className="font-medium" href="https://github.com/LawDominic">Dominic Law</a>
          <p class="text-base md:text-sm"> Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
      </footer>
    </div>
  );
}

export default App;
