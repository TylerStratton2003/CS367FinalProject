import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Vapor: Game Recommendation System
        </p>

      </header>
      <body>
        <p>
        <label for="search">Search:</label>
        <input type="text" name="search" id="search"></input>
        <label for="tags">Tags:</label>
        <input type="checkbox" name="tags" id="tags"></input>
        </p>
      </body>
    </div>
  );
}

function searchResults() {
  return (
    <div className="results">
    <header className="results">
      <p>Results:</p>
    </header>
    </div>
  )
}
function mostPop() {
  return (
    <div className="mostpop">
    <header className="most-pop">
      <p>Most Popular:</p>
    </header>
    </div>
  )
}

function newest() {
  return (
    <div className="newest">
    <header className="newest">
      <p>Newest:</p>
    </header>
    </div>
  )
}


export default App;
