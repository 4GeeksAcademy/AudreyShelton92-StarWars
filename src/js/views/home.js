import React from "react";
import CharacterCards  from "../component/characterCards";
import PlanetCards  from "../component/planetCards";
import StarshipCards  from "../component/starshipCards";
import "../../styles/home.css";

export const Home = () => {
	
	return (
		<div className="text-center mt-5">
			<CharacterCards />
			<PlanetCards />
			<StarshipCards />

		</div>
	)
};