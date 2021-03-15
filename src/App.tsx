import React from "react"
import "./App.css"
import Note from "./Components/Note/Note"
import "./Components/Nav/Nav.css"
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import AddNote from "./Components/addNote/AddNote"
import { Home } from "./assets/icons/Home"
import { Plus } from "./assets/icons/Plus"
import { User } from "./assets/icons/User"
import SingleNote from "./Components/SingleNote/SingleNote"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <div className="nav-container">
            <div className="nav-items">
              <div className="container-icons">
                <NavLink to="/" exact activeClassName="active-nav">
                  <div className="icon-container" title="Go to home">
                    <Home></Home>
                  </div>
                </NavLink>
                <NavLink to="/add" activeClassName="active-nav">
                  <div className="icon-container plus" title="Add a note">
                    <Plus></Plus>
                  </div>
                </NavLink>
                <NavLink to="/user" activeClassName="active-nav">
                  <div className="icon-container" title="Go to user panel">
                    <User></User>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="fullApp">
            <Switch>
              <React.Fragment>
                <div className="app-container">
                  <Route path="/" exact>
                    <div className="notes-container">
                      <Link to="/note">
                        <Note />
                      </Link>
                    </div>
                  </Route>
                  <Route path="/add">
                    <AddNote></AddNote>
                  </Route>
                  <Route path="/user">user</Route>
                  <Route path="/note">
                    <SingleNote />
                  </Route>
                </div>
              </React.Fragment>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App
