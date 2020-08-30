import React, { useState,useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {UseForm} from './UseForm';

import {Hello} from './Hello';
function App() {
  const [values, handleChange] =UseForm({email:"",password:"", firstName:""});
  
  const emailRef=useRef();
  const [ShowHello,setShowHello] = useState(true);
  return (
    <div className="App">
     {ShowHello?<Hello/>:null}
  <input name="email" value={values.email} onChange={handleChange}></input>
  <input ref={emailRef} type="password" name="password" value={values.password} onChange={handleChange}></input>
  <input  name="firstName" value={values.firstName} onChange={handleChange}></input>
  <button onClick={()=>emailRef.current.focus()}>focus Email</button>
  <button onClick={()=>setShowHello(!ShowHello)}>toggle Hello</button>

    </div>
  );
}

export default App;
