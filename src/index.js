import React from "react";
import Reactdom from "react-dom/client";
import App from './App';
import './index.css';
const root =Reactdom.createRoot(document.getElementById('root'));

root.render(<App />);