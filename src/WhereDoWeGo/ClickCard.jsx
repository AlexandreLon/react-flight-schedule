import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
}

function ClickableCard(props) {
  return (
    <Card style={props.style} className={props.className}>
      <ButtonBase
          className={props.classes.cardAction}
          onClick={props.onClick}
      >
        <CardMedia />
        <CardContent>{props.children}</CardContent>
      </ButtonBase>
    </Card>
  );
}

export const ClickCard = withStyles(styles)(ClickableCard)