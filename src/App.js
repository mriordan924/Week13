// import react, useState for switching "babe" for username, components

import React, {useState} from 'react'
import './App.css'
import Nav from './Nav'
import Login from './login'
import Logo from './Logo'
import Background from './Background';
import Calendar from './Calendar'
import Winner from './Winner'

 

function App() {
  const [username, setUsername] = useState ("");
  return (
  <div className="App">
   <div className='header'>
    <Logo /> 
    <Background />
    </div>

    <Nav></Nav>

    <section className="welcome">
      <h1 className="happyStyling">Happy styling, {username || 'babe'}! </h1>
      {/* <p>Happy Styling</p> */}
    </section>

    <div class="loginContainer">
      <div class="winnerImage">
      <Winner />{Winner}
      </div>
      <div class="loginForm">
      <Login setUsername={setUsername}> {/setUsername/}Login form</Login>
      </div>
      <div class="calendarImage">
      <Calendar />
      </div>
    </div>

    <br></br>
    <div>
    <p className="footer">Share your styles, get styling help, buy and sell.</p>
    </div>
  </div>
  );
}



export default App
