import React from 'react';

const gamelist = (props) => {
    return (
        <div>
            {props.games.map((game, index) =>
                <div className ="d-flex justify-content start m-3">
                    <text></text>
                </div>
            )}
        </div>
    );
};

export default gamelist;