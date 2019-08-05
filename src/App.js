import React from 'react';
import { Helmet } from "react-helmet";
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Pickup Manager | RED Struss</title>
          <meta name="description" content="Pickup Manager" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
      </Helmet>
    
      <Navigation />
    </div>
  );
}

export default App;
