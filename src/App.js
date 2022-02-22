// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
// import Header from './Components/Header/Header';
import AuthPage from './Components/AuthPage';
import ListPage from './Components/List/ListPage';
import SearchPage from './Components/SearchPage';
import { getUser, logout } from './services/fetch-utils';


function App() {
  // track user in state
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
    // add a useEffect to get the user and inject the user object into state on load
  useEffect(() => {
    async function fetch() {
      const data = getUser();
      setUser(data);
    }
    fetch();

  }, []);
  async function handleLogout() {
    // call the logout function
    await logout();
    // clear the user in state
    setUser('');
  }

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {
          user && 
            <ul>
              <li>
                <NavLink activeClassName="my-active-class" to="/search">Search Page</NavLink>
              </li>
              <li>
                <NavLink activeClassName="my-active-class" to="/watchlist">Watchlist Page</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
        }
        <main>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the search page. Otherwise, render auth page. the AuthPage will need a function called setUser that can set the user state in App.js */}
              {
                user
                  ? <Redirect to="/search" />
                  : <AuthPage setUser={setUser} />
              }
              
            </Route>
            <Route exact path="/search">
              {/* if there's not a signed in user, redirect them to the home page. Otherwise, take user them to the search page */}
              {
                !user
                  ? <Redirect to="/" />
                  : <SearchPage />
              }
            </Route>
            <Route exact path="/watchlist">
              {
                !user
                  ? <Redirect to="/" />
                  : <ListPage />
              }
            </Route>
          </Switch>
        </main>

      </div>
    </Router>
  );
}

export default App;
