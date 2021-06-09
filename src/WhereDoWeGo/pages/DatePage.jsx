import React from 'react'
import {StepPage} from './StepPage'
import {Traveller} from './pages/Traveller'
import {Departure} from './pages/Departure'
import {DatePicker} from './components/DatePicker'

import { usePosition } from 'use-position';
import {holidays} from '../../utils/holidays'
import CircularProgress from '@material-ui/core/CircularProgress';

const SECOND_IN_ONE_DAY = 24 * 60 * 60 * 1000;

export const DatePage = ({onChange = (_) => {}}) => {
  const {latitude, longitude} = usePosition();
  const [date, setDate] = React.useState(null);
  
  React.useEffect(() => {
    holidays(longitude, latitude).then(res => {
      setDate(res.filter(e => new Date(e.start_date).getTime() > new Date().getTime())[0].start_date)
    })
  }, [latitude, longitude])

  if(!date) return <CircularProgress />
  return <DatePicker onChange={onChange} start={new Date(date)} end={new Date(new Date(date).getTime() + (7 * SECOND_IN_ONE_DAY))} />
}