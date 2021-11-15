import React from "react";
import logo from '../logo.svg';

function Home({ message }) {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { message || 'Edit src/App.js and save to reload.'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
}

export default Home;