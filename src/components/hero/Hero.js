function Hero(props) {
    const {character} = props;
    return(
        <div>
            Id: {character.id}<br/>
            Name: {character.name}<br/>
            Status:  {character.status}<br/>
            Species {character.species}<br/>
            Gender: {character.gender}<br/>
            {<img src={character.image} alt=""/>}




        </div>
    )
}

export default Hero