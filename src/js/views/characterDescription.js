import React, {useEffect, useState, useContext} from 'react'
import { Context } from '../store/appContext';
import { useParams } from 'react-router'

export default function characterDescription() {
    useEffect(() => {
        async function getCharacter() {
          let response = await fetch(`https://last-airbender-api.fly.dev/api/v1/characters/${id}`)
          let data = await response.json()
          setCharacter(data)
        }
        getCharacter()
      }, [])
}


return( 
<div>

</div>

)
