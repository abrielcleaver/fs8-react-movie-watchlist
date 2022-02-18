// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './Components/Header';
import AuthPage from './Components/AuthPage';
import ListPage from './Components/ListPage';
import { getUser } from './services/fetch-utils';

function App() {
  // track user in state
  const [user, setUser] = useState('');
    // add a useEffect to get the user and inject the user object into state on load
  useEffect(() => {
    async function fetch() {
      const data = getUser();
      setUser(data);
    }
    fetch();

  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the list. Otherwise, render auth page. the AuthPage will need a function called setUser that can set the user state in App.js */}
              <AuthPage />
            </Route>
            <Route>
              {/* if there's a user, take them to the list page. Otherwise, redirect them to the home/auth page */}

            </Route>
          </Switch>
        </main>

      </div>
    </Router>
  );
}

export default App;
