import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {character} from "../views/character";

export default function CharacterCards() {
    const [characters, setCharacters] = useState([]);
    const {store, actions} = useContext(Context);

    useEffect(() => {
        async function getCharacters() {
          let response = await fetch("https://www.swapi.tech/api/people")
          let data = await response.json();
          setCharacters(data.results)
        }
        getCharacters()
      }, [])


      const handleFavorites = (e, name) => {
        e.preventDefault()
        if(store.favs.includes(name)) {
          actions.removeFavs(name)
        }
        else {
          actions.addFavs(name)
        }
      }


      return (
        <div className="d-flex col-10 overflow-auto mt-5 mx-auto">
          {characters?.map((character, index) => (
            <div key={index} className="card" style={{"minWidth": "18rem"}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="img-fluid rounded" alt={character.name} />
                <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Link to={`/character/${character.uid}`} className="btn btn-primary">Learn More</Link>
                <span onClick={(e) => handleFavorites(e, character.name)}><i className="fa fa-solid fa-star"></i></span>
                </div>
            </div>
          ))}
           
        </div>
      )
    }