import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBpRNsBr0PsuBHvcvZY5zAhK3eZ2zXYDLI';

//creating a new component which creates some HTML
const App = function(){
    return (
        <div> Hello!!
            <SearchBar />
        </div>
    );
}

//create a DOM
ReactDOM.render(<App />, document.querySelector('.container'));