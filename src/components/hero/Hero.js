function Hero(props) {
    const {character} = props;
    return(
        <div>
           Mision: {character.mission_name}<br/>
            Launch year: {character.launch_year}<br/>
            {<img src={character.links.mission_patch_small} alt=""/>}



        </div>
    )
}

export default Hero