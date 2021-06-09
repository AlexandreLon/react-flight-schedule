
import {Airline} from './Airline'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Airlines = ({days, show}) => {
  return <TransitionGroup>
    <CSSTransition key={show} timeout={200} classNames="messageout">
      <>{show && <Airline name="EasyJet" days={days}/>}</>
    </CSSTransition>
  </TransitionGroup>
}