import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Vapor: Game Recommendation System</p>
        <p>
          <label for="search">Search:</label>
          <input type="text" name="search" id="search" placeholder="Enter game name..."></input>
          <button onclick="searchData()">Search</button>
          <label for="tag1">Tag 1:</label>
          <input type="text" name="tag1" id="tag1"></input>
          <label for="tag2">Tag 2:</label>
          <input type="text" name="tag2" id="tag2"></input>
        </p>
        <p>
          <label for="win">Windows:</label>
          <input type="checkbox" name="win" id="win" ></input>
          <label for="lix">Linux:</label>
          <input type="checkbox" name="lix" id="lix" ></input>
          <label for="mac">Mac:</label>
          <input type="checkbox" name="mac" id="mac" ></input>
        </p>
      </header>
      <body>
        <table>
          <tr>
            <th>Game 1</th>
            <th>Game 2</th>
            <th>Game 3</th>
            <th>Game 4</th>
            <th>Game 5</th>
          </tr>
        </table>
      </body>
    </div>
  );
}



export default App;
