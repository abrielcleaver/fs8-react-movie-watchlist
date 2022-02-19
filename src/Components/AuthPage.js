import React, { useState } from 'react';
import { signIn, signUp } from '../../services/fetch-utils';

export default function AuthPage({ setUser }) 
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    const user = await signIn(email, password);

    setUser(user);
  }
    
  async function handleSignUp() {

    const user = await signUp(email, password);

    setUser(user);
  }

  return (
    <><div>Welcome to the AuthPage</div>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input name="email" onChange={e => setEmail(e.target.value)} required type="email"/>
        </label>
        <label>
          Password
          <input name="password" onChange={e => setPassword(e.target.value)} required type="password"/>
        </label>
        <button>Sign In</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </>
  );
}
