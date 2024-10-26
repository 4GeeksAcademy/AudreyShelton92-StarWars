import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { planet } from "../views/planet";

export default function PlanetCards() {
    const [Planets, setPlanets] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        async function getPlanets() {
            let response = await fetch("https://www.swapi.tech/api/planets")
            let data = await response.json();
            setPlanets(data.results)
        }
        getPlanets()
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
            {Planets?.map((planet, index) => (
                <div key={index} className="card" style={{ "minWidth": "15rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="img-fluid rounded" alt={planet.name} />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <Link to={`/planet/${planet.uid}`} className="btn btn-primary">Learn More</Link>
                        <span onClick={(e) => handleFavorites(e, planet.name)}><i className="fa fa-solid fa-star"></i></span>
                    </div>
                </div>
            ))}

        </div>
    )
}