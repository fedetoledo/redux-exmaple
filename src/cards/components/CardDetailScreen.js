import { useEffect } from "react";
import { useParams } from "react-router-dom";

function CardDetailScreen({card, getCard}) {

    const {pokemonId} = useParams();

    useEffect(() => {
        getCard(pokemonId)
    }, [getCard, pokemonId])
    
    return (
        <div>
            <h1>{card.name}</h1>
            <img src={card.imageUrl} alt={card.name}/>
        </div>
    )
}

export default CardDetailScreen;