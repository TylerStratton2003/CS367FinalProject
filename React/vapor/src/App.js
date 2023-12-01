import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Vapor: Game Recommendation System</p>
        <p>
          <label for="search">Search:</label>
          <input type="text" name="search" id="search"></input>
          <label for="tag1">Tag 1:</label>
          <input type="text" name="tag1" id="tag1"></input>
          <label for="tag2">Tag 2:</label>
          <input type="text" name="tag2" id="tag2"></input>
          <label for="win">Windows:</label>
          <input type="checkbox" name="win" id="win" checked></input>
          <label for="lix">Linux:</label>
          <input type="checkbox" name="lix" id="lix" checked></input>
          <label for="mac">Mac:</label>
          <input type="checkbox" name="mac" id="mac" checked></input>
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
