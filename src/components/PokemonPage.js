import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  console.log(search)

  const searchedPokemon = pokemon.filter(item => {
    if(search === '') return true
    else {
      for (let i = 0; i < item.name.length - search.length + 1; i++) {
        if(item.name.substring(i, i + search.length) === search) {
          return true
        }
      }
    }
    return false
  })

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(items => setPokemon(items))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemon={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
