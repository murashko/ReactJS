import React from 'react';
import Ninjas from './ninjas';

function App() {
  return (
    <div className="App">
      <h1>My React app!</h1>
	  <p>Wellcome :)</p>
	  <Ninjas name="Ryu" age="25" belt="black" />
	  <Ninjas name="Yoshi" age="30" belt="green" />
    </div>
  );
}

export default App;
