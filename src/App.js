import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
      {/* end of front end */}
    </div>
  );
}

export default App;
