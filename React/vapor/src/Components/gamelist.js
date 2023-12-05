import React from 'react';

const gamelist = (props) => {
    const favoriteComponent = props.favoriteComponent;

    return (
        <div>
            {props.games.map((game, index) =>
                <div className ="d-flex justify-content start m-3">
                    <img src={game.image} alt='image'></img>
                    <div onClick={() => props.handleFavoritesClick(game)}className='overlay d-flex align-items-center justify-content-center'>
                        <favoriteComponent />
                    </div>
                </div>
            )}
        </div>
    );
};

export default gamelist;