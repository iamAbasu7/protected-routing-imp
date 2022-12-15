import React from 'react';

import './App.css';

import { PrimaryRoute } from './routes/PrimaryRoute';

function App() {
  return (
    <div className="App">
      
      <PrimaryRoute/>
    </div>
  );
}

export default App;

// / -> Home.js
// /about -> About.js
// /add-blog -> AddBlog.js