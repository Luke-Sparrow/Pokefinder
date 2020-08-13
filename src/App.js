import React from 'react';
import './App.css';
import SearchBox from './SearchBox';
import PokeList from './PokeList';
import 'tachyons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        pokemon: [],
        searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then(response => response.json())
      .then( (info) => {
        this.setState({ pokemon: info.results})})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { pokemon, searchfield } = this.state;
    const filteredPokemon = pokemon.filter(pokemon => {
      return pokemon.name.includes(searchfield.toLowerCase())
    })

    return !pokemon.length ?
      <h1 className='tc'>Loading...</h1> :
        ( 
          <div className='tc'>
            <h1 className ='f1  tc' id='title'>PokeFinder!</h1> 
            <SearchBox searchChange={this.onSearchChange}/> 
            <PokeList pokemon={filteredPokemon}/>
          </div>
        )
  }
}

export default App;