import React from 'react'
import {StepPage} from './StepPage'
import {Traveller} from './pages/Traveller'
import {Departure} from './pages/Departure'
import {DatePage} from './pages/DatePage'
import Box from '@material-ui/core/Box';

const categories = [
  {
    "code": "beach",
    "name": "Plages",
    "description": "Destinations soleil et mer",
    "icon": "beach.png",
    "__typename": "Category"
  },
  {
    "code": "citybreak",
    "name": "City break",
    "description": "Courts séjours urbains",
    "icon": "city.png",
    "__typename": "Category"
  },
  {
    "code": "culture",
    "name": "Culture",
    "description": "Événements et sites culturels remarquables",
    "icon": "coliseum.png",
    "__typename": "Category"
  },
  {
    "code": "ecotourism",
    "name": "Eco-responsable",
    "description": "Ecotourisme et actions pour l'environnement",
    "icon": "planet-earth.png",
    "__typename": "Category"
  },
  {
    "code": "gastronomy",
    "name": "Gastronomie",
    "description": "Plaisirs culinaires et spécialités locales",
    "icon": "dish.png",
    "__typename": "Category"
  },
  {
    "code": "isle",
    "name": "Îles",
    "description": "Expériences Insulaires",
    "icon": "island.png",
    "__typename": "Category"
  },
  {
    "code": "offtrack",
    "name": "Insolite",
    "description": "Hors des sentiers battus",
    "icon": "ying-yang.png",
    "__typename": "Category"
  },
  {
    "code": "outdoor",
    "name": "Nature-Outdoor",
    "description": "Grands espaces et activités extérieures",
    "icon": "savannah.png",
    "__typename": "Category"
  },
  {
    "code": "roadtrip",
    "name": "Road Trip",
    "description": "Découvertes au fil de la route",
    "icon": "road.png",
    "__typename": "Category"
  },
  {
    "code": "unesco",
    "name": "Patrimoine UNESCO",
    "description": "Sites naturels ou culturels classés",
    "icon": "museum.png",
    "__typename": "Category"
  }
]

export const Destination = ({onChange = (_) => {}}) => {
  /*return <div>{categories.map(category => (
    <div>
      <img title="Icon" alt="Icon" src={"https://www.pinclipart.com/picdir/big/10-100096_decorative-border-clip-art.png"} style={{width: '50px', height: '50px'}} />
      {category.name}
    </div>
  ))}</div>*/

  const [selected, setSelected] = React.useState([])

  const handleClick = (code) => {
    if(!selected.includes(code)) {
      setSelected([...selected, code])
      onChange([...selected, code])
    }
    else {
      setSelected(selected.filter((e) => e != code))
      onChange(selected.filter((e) => e != code))
    }
  }

  return <Box style={{display: 'grid', gridGap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, auto))', width: '100%;'}}>
        {categories.map(category => (
          <Box key={category.code} onClick={() => {handleClick(category.code)}} style={{cursor: 'pointer', borderRadius: '10px', width: '250px', height: '100px', border: selected.includes(category.code) ? '1px blue dashed' : null}} p={1} m={1} display="flex" alignItems="center" flexDirection="row" flexWrap="wrap" p={1} bgcolor="grey.300">
              <img title="Icon" alt="Icon" src={"https://www.pinclipart.com/picdir/big/10-100096_decorative-border-clip-art.png"} style={{width: '50px', height: '50px'}} />
              <div style={{marginLeft: '10px'}}>{category.name}</div>
          </Box>
  ))}
      </Box>
}