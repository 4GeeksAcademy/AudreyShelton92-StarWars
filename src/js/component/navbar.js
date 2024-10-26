import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-* mb-3 width-100%">
			<img src="https://www.lego.com/cdn/cs/set/assets/blteecd4a67e5ed390b/LOGO_sw_standard_2hy17_original_cmyk_1.png?format=png&height=60&dpr=1"></img>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Open Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favs?.map((fave, index) => {
							return (
								<li key={index}><a className="dropdown-item" href="#">{fave}</a></li>
							)
						})}


					</ul>
				</div>
			</div>
		</nav>
	);
};
