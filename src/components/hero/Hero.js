const Hero = ({characters}) => {
    const {name, status, species,gender,image,lpcation} = characters;

    return(
        <div>
            <div>
                Name: {name}
                Status: {status}
                Species: {species}
                Gender: {gender}
                Location:{lpcation}
                image: {<img src={image} alt=""/>}
            </div>
        </div>
    )

}

export {Hero}