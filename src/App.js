import React, { useState, useEffect } from "react";



function App() {

  const [randomDndClass, setRandomDndClass] = useState("");

  const getRandomDndClass = () => {
    // http://localhost:3000/random-dnd-class
  fetch('https://dnd-generator.onrender.com/random-class')
      .then(response => response.json())
      .then(data => setRandomDndClass(data.class))
      .catch(error => console.error('Error fetching random D&D class:', error));
};

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test Microservice
        </p>
        <button onClick={getRandomDndClass}>Get Random D&D Class</button>
            {randomDndClass && <p>Random D&D Class: {randomDndClass}</p>}
      </header>
    </div>
  );
}

export default App;
