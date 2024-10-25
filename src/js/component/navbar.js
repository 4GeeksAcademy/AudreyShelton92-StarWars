import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 width-100%">
			<i class="fa-solid fa-jedi"></i>
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
