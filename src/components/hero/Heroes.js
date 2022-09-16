import {useState, useEffect} from 'react'
import Heroe from "./Hero"

function Heroes() {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(value => value.json())
            .then(value => {
                let newArrSpaseX = value.filter(search => search.launch_year < 2020)
                setCharacters(newArrSpaseX)
            });
    })


    return (
        <div>
            {
                characters.map(character => <Heroe key={character.id} character={character}/>)
            }
        </div>
    );
}


export default Heroes;