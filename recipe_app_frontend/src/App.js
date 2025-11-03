import React, { useState, useEffect } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <p>Current theme: <strong>{theme}</strong></p>
        <div style={{marginTop: 24, padding: 16, border: '1px solid var(--border-color)', borderRadius: 12, maxWidth: 380}}>
          <h3 style={{margin: '0 0 12px 0'}}>Sign In Preview</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <label style={{textAlign: 'left'}}>Email</label>
            <input style={{padding: 10, borderRadius: 8, border: '1px solid var(--border-color)'}} placeholder="Enter Email" />
            <label style={{textAlign: 'left'}}>Password</label>
            <input type="password" style={{padding: 10, borderRadius: 8, border: '1px solid var(--border-color)'}} placeholder="Enter Password" />
            <button className="theme-toggle" onClick={()=>{}} aria-label="Sign In" style={{marginTop: 8}}>Sign In</button>
          </div>
        </div>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
