import React from 'react';
import { logout } from '../services/fetch-utils';

export default function Header({ user, setUser }) {

  async function handleLogout() {
    // call the logout function
    await logout();
    // clear the user in state
    setUser('');
  }
  return (
    <header>
      {/* if there's a user, render a logout button here */}
      {
        user &&
            <button onClick={handleLogout}>logout</button>
      }
    </header>);
}
