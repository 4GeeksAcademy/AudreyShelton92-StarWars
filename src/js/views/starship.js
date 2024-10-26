import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function StarshipDescription() {
    const { id } = useParams();
    const [starship, setStarship] = useState({});

    useEffect(() => {
        async function getStarship() {
            let response = await fetch(`https://www.swapi.tech/api/starships/${id}`);
            let data = await response.json();
            setStarship(data.result.properties);
        }
        getStarship();
    }, [id]);

    return (
        <div>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Length: {starship.length}</p>
            <p>Top Speed: {starship.max_atmosphering_speed}</p>
            <p>Class: {starship.starship_class}</p>
        </div>
    );
}