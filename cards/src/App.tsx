import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <Card img="https://imgholder.ru/300x200/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
