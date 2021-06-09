import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Rating from '@material-ui/lab/Rating';

import ecoGray from '../../../assets/eco-gray.svg'
import ecoGreen from '../../../assets/eco-green.svg'
import direct from '../../../assets/direct.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const DestinationList = ({airlines = []}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {airlines.map(airline => (
        <ListItem key={airline.code}>
          <ListItemAvatar>
            <img width="100px" src={`https://static.aeroports-voyages.fr/image/svg/airline/${airline.code}.svg`} />
          </ListItemAvatar>
          <ListItemText>
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <img src={direct} />
              <Rating name="read-only" value={airline.value} readOnly 
                emptyIcon={<img src={ecoGray} />} icon={<img src={ecoGreen} />} />
          </div>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
