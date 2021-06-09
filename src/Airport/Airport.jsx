import React from 'react';
import {
  Card,
  Typography,
  IconButton,
  CardActionArea,
  CardContent,
  CardActions,
  Chip
} from '@material-ui/core';
import { Title } from 'ra-ui-materialui';
import MoodIcon from '@material-ui/icons/Mood';
import ArrowBack from '@material-ui/icons/ArrowBack';
import '../style.css';
import { Engine } from './Engine';
import { TabEngineDirection } from './TabEngineDirection';

export const Airport = () => {
  return <Card style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Title title="Programme de vol" />
      <Typography gutterBottom variant="h5" component="h2">
        Aéroport
      </Typography>
      <IconButton color="primary" aria-label="back">
        <ArrowBack />
      </IconButton>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Aeroport de Nice
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              ut veniam at unde deserunt qui totam nisi ullam amet possimus.
              Pariatur nulla quis, quidem maxime ipsum consequatur adipisci
              nihil nam!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Chip icon={<MoodIcon />} label="Publié" color="primary" />
        </CardActions>
      </Card>
      <Engine />
      <TabEngineDirection />
    </Card>
}