import './App.css';
import React, { useState, useEffect} from 'react';
import gamelist from './Components/gamelist';
import gamelistheading from './Components/gamelistheading';
import SearchBox from './Components/Searchbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFavorite from './Components/AddFavorite';
import RemoveFavorites from './Components/RemoveFavorites';
import TagCheckBox from './Components/TagCheckBox';


function App() {
    const[games, setGames] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const[searchValue, setSearchValue] = useState('');

    const getGameRequest = async(searchValue) => {
      const url='http://www/omdbapi.com/?s=${searchValue}&apikey=263d22d8';

      const repsonse = await fetch(url);
      const responseJson = await response.json();

      if(responseJson.Search){
        setGames(responseJson.Search);
      }
    }

    useEffect((searchValue) =>{
      getGameRequest();
    }, [searchValue]);

    const addFavoriteGame = (game) => {
      const newFavaoriteList = [...favorites, game];
      setFavorites(newFavaoriteList);
    }

    const removeFavoriteGame = (game) => {
      const newFavaoriteList = favorite.filter((favorite) => favorite.id !== game.id);
      setFavorites(newFavaoriteList);
    }
    return (
    <div className='container-fluid game-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <gamelistheading heading="games"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TagCheckBox />
      </div>
      <div className='row'>
        <gamelist 
          games = {games} 
          handleFavoritesClick={addFavoriteGame}
          favoriteComponent = {AddFavorite}
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <gamelistheading heading='Favorites' />
      </div>
      <div className='row'>
        <gamelist 
          games = {favorites} 
          handleFavoritesClick={removeFavoriteGame}
          favoriteComponent = {RemoveFavorites}
        />
      </div>
    </div>
    );
    
}



export default App;
