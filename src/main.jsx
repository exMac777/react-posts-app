import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// This is the entry point of all react applications. This selects the dom element with id root and
//  renders the whole application inside of that. For this to work, the index.html(root html) file
//  needs to have a div with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
