import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [target, setTarget] = useState(false)

  function handleClick() {
    setTarget(!target)
  }

  function capitalize(str) {
    let newStr = ''
    newStr += str[0].toUpperCase()
    newStr += str.substring(1)
    return newStr
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img src={target ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{capitalize(pokemon.name)}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
