import React from 'react';
import { createRoot } from 'react-dom/client';
import Component from './component';

const App = () => (
  <div>
    <h1>Component APP</h1>
    <Component />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);