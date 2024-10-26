import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function PlanetDescription() {
    const { id } = useParams();
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        async function getPlanet() {
            let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            let data = await response.json();
            setPlanet(data.result.properties);
        }
        getPlanet();
    }, [id]);

    return (
        <>
            <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
        
            </div>
        </>
    );
}