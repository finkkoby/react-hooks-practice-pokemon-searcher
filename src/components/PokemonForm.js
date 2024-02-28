import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemon, setPokemon }) {
  const [name, setName] = useState('')
  const [hp, setHp] = useState(0)
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleHpChange(e) {
    setHp(e.target.value)
  }

  function handleFrontChange(e) {
    setFront(e.target.value)
  }

  function handleBackChange(e) {
    setBack(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back
        }
      })
    })
      .then(res => res.json())
      .then(newItem => {
        setPokemon([...pokemon, newItem])
      })
    setName('')
    setHp(0)
    setFront('')
    setBack('')
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHpChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
