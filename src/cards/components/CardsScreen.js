
import { useEffect, useState } from 'react';
import { 
    Route, 
    BrowserRouter as Router, 
    Link, 
    Switch,
    useParams,
    Redirect,
    useLocation,
} from 'react-router-dom';
import {pokemonTypes, cardTypes} from '../../constants';
import CardDetail from '../containers/CardDetail';

function CardsScreen({cards, status, getCardsRequest}) {
    // Hook for dispatching actions without mapping to props
    // const dispatch = useDispatch();
    const [showTypes, setShowTypes] = useState(false)
    let loadingStatus = status

    useEffect(() => {
        // dispatch(actions.getCardsRequest())
        getCardsRequest();
    }, [getCardsRequest])

    const handleChange = location => {
        let reg = /\/Pokémon(\/.+)*/g
        const matches = location.pathname.match(reg)
        if (matches) setShowTypes(location.pathname === matches[0])
        else setShowTypes(false)
    }

    if (loadingStatus === 'loading') {
        return (
            <div className="loader-container">
                <div className='loading'>
                    <p className="middle-screen">Loading</p>
                    <div className="middle-screen loader" />
                </div>
            </div>
        )
    }

    return (
        <Router>
            <h1 className="title">Pokemon TCG</h1>
            <div className="tabs is-centered">
                <ul>
                    {
                        cardTypes.map(type => {
                            return <li key={type}><Link to={`/${type}`}>{type}</Link></li>
                        })
                    }
                </ul>
            </div>
            {showTypes ? 
                <div className="tabs is-centered">
                    <ul>
                        {
                            pokemonTypes.map(type => {
                                return <li key={type}><Link to={`/Pokémon/${type}`}>{type}</Link></li>;
                                
                            })
                        }
                    </ul>
                </div>
                : null
            }
            <Switch>
                <Route path="/Pokémon/:pokemonType/:pokemonId">
                    <CardDetail />
                </Route>
                <Route exact path='/'>
                    <Redirect to='/Pokémon/Water' />
                </Route>
                <Route path="/:cardType/:pokemonType?">
                    <CardSubList 
                        key={1} 
                        cards={cards} 
                        handleLocationChange={handleChange}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

function CardSubList({cards, handleLocationChange}) {
    const { cardType, pokemonType } = useParams();
    let location = useLocation()

    useEffect(() => {
        handleLocationChange(location)
    }, [handleLocationChange, location])

    const isPokemon = cardType === 'Pokémon';
    const filterCards = () => {
        let filtered = []
        filtered = cards.filter(card => card.supertype === cardType)
        if (isPokemon && pokemonType) {
            filtered = filtered.filter(card => card.types[0] === pokemonType)
        } else {
        }
        return filtered.map(card => {
            return (
                <Link to={`/Pokémon/${pokemonType}/${card.id}`} key={card.number} className="column is-4">
                    <p>{card.name}</p>
                    <img src={card.imageUrl} alt={card.name}/>
                </Link>   
            )
        })
    } 
    
    return (
        <div className="columns is-centered is-multiline">
            {  
                cards ? filterCards() : <p>No cards available</p>
            }
        </div>
    )
}

export default CardsScreen;