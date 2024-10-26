import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { starship } from "../views/starship";

export default function StarshipCards() {
    const [starships, setStarship] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getStarship() {
            let response = await fetch("https://www.swapi.tech/api/starships")
            let data = await response.json();
            setStarship(data.results)
        }
        getStarship()
    }, [])


    const handleFavorites = (e, name) => {
        e.preventDefault()
        if (store.favs.includes(name)) {
            actions.removeFavs(name)
        }
        else {
            actions.addFavs(name)
        }
    }


    return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
            {starships?.map((starship, index) => (
                <div key={index} className="card" style={{ "minWidth": "15rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="img-fluid rounded" alt={starship.name} />
                    <div className="card-body">
                        <h5 className="card-title">{starship.name}</h5>
                        <Link to={`/starship/${starship.uid}`} className="btn btn-primary">Learn More</Link>
                        <span onClick={(e) => handleFavorites(e, starship.name)}><i className="fa fa-solid fa-star"></i></span>
                    </div>
                </div>
            ))}

        </div>
    )
}