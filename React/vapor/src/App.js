import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Vapor: Game Recommendation System</p>
        <p>
          <label for="search">Search:</label>
          <input type="text" name="search" id="search"></input>
          <label for="tags">Tags:</label>
          <input type="checkbox" name="tags" id="tags"></input>
        </p>
      </header>
      <body>
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
  );
}



export default App;
