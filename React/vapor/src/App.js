import './App.css';
import React, { useState, useEffect} from 'react';
import gamelist from './Components/gamelist';
import gamelistheading from './Components/gamelistheading';
import SearchBox from './Components/Searchbox';


function App() {
    const[games, setGames] = useState(['http://localhost:8080']);
    const[searchValue, setSearchValue] = useState('');

    const getGameRequest = async() => {
      const url=""

      const repsonse = await fetch(url);
      const responseJson = await response.json();

      console.log(reponseJson);
      setGames(responseJson.Search);
    }

    UseEffect(() =>{
      getGameRequest();
    }, []);

    return (
    <div className='container-fluid game-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <gamelistheading heading="games"/>
        <SearchBox />
      </div>
      <div className='row'>
        <gamelist games = {games} />
      </div>
    </div>
    );
    
}



export default App;
