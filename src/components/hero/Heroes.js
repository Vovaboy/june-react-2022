import {useSteat, useEffect} from 'react'
import {Hero} from './Hero'

const Heroes = () => {
    const [characters, setCharacters] = useSteat([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then((data) => setCharacters(data.results))


    }, [])
    return (
        <div>
            {characters.map(caracters => <Hero key={caracters.id} characters={caracters}/>)}
        </div>
    )
}
export {Heroes};