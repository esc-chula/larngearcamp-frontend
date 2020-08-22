import React from 'react';
import logo from './images/gear-logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{marginTop: '1em'}}>
          ค่ายลานเกียร์ครั้งที่ 20
        </p>
      </header>
    </div>
  );
}

export default App;
