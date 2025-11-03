import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootElem = document.getElementById('root');
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Fallback to avoid runtime crash if root element is not present
  const fallback = document.createElement('div');
  fallback.id = 'root';
  document.body.appendChild(fallback);
  const root = ReactDOM.createRoot(fallback);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
