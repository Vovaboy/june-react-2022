import {useState} from 'react'
import Heroe from "./Hero"

function Heroes() {

    const [characters, setCharacters] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results);
        });

    return (
        <div>
            {
                characters.map(character => <Heroe key={character.id} character={character} r={character}/>)
            }
        </div>
    );
}


export default Heroes;