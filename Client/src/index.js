import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App'; // Assuming you have an App component

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);