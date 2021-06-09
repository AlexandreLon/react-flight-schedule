import React from 'react'
import {ItemList, ItemMain, Item} from './ItemList'
import {useContinents} from '../hooks/useAirlineContinents.js'

export const Airline = () => {

  const {continents} = useContinents()

  const [current, setCurrent] = React.useState(null)

  const handleCLick = (code, text) => {
    setCurrent(code + '-' + text)
  }
  
  return <>
    <ItemList onClick={handleCLick} elements={continents}/>
    <div>Curr : {current}</div>
    <pre>{JSON.stringify(continents, null, 4)}</pre>
    </>
}

//Mettre en place la liste des contients/pays/villes fait par une compagnie aérienne