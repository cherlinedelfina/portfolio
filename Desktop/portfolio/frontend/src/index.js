import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(<App />); // Use createRoot to render the app

reportWebVitals();

