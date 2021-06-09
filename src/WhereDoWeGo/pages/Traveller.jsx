import React from 'react'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import one from '../../assets/one.svg'
import duo from '../../assets/duo.svg'
import group from '../../assets/group.svg'
import family from '../../assets/family.svg'
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

const categories = ['SOLO', 'DUO', 'GROUP', 'FAMILY']

export const Traveller = ({onChange = (_) => {}}) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(-1)

    React.useEffect(() => {
      onChange(categories[selected])
    }, [selected])

    return <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
                <Card variant="outlined" style={selected === 0 ? {border: '1px solid blue'} : {}} className={classes.card}>
                  <ButtonBase onClick={() => {setSelected(0)}} style={{width: '100%', height: '100%'}}>
                    <img src={one} />
                    <div>Une Personne</div>
                  </ButtonBase>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card variant="outlined" style={selected === 1 ? {border: '1px solid blue'} : {}} className={classes.card}>
                  <ButtonBase onClick={() => {setSelected(1)}} style={{width: '100%', height: '100%'}}>
                    <img src={duo} />
                    <div>Un Duo</div>
                  </ButtonBase>
                </Card>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={6}>
              <Card variant="outlined" style={selected === 2 ? {border: '1px solid blue'} : {}} className={classes.card}>
                <ButtonBase onClick={() => {setSelected(2)}} style={{width: '100%', height: '100%'}}>
                  <img src={group} />
                  <div>Un Groupe</div>
                </ButtonBase>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined" style={selected === 3 ? {border: '1px solid blue'} : {}} className={classes.card}>
                <ButtonBase onClick={() => {setSelected(3)}} style={{width: '100%', height: '100%'}}>
                  <img src={family} />
                  <div>Une Famille</div>
                </ButtonBase>
              </Card>
            </Grid>
        </Grid>
    </Grid>
}