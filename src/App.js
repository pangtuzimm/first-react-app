import React, { useState } from 'react';
import './App.css';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validForm() {
    return email.length > 0 && password.length > 0;
  }
  
  return (
    <div className="App">
      <form class="App-login">
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl 
            autoFocus 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </FormGroup>
        <Button disabled={!validForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
