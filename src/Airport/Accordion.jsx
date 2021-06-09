import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const AccordionElement = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    height: "5px",
    '&$expanded': {
      height: "5px",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    width: "100vw",
    display: "block",
    padding: 0
  },
}))(MuiAccordionDetails);

export const Accordion = ({color = "primary", defaultValue = false, elements = [], onChange = (e) => {}, children = <div></div>}) => {
  const [expanded, setExpanded] = React.useState(defaultValue);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    onChange(newExpanded ? panel : false)
  };

  return <>{elements.map(element => {
    return <AccordionElement TransitionProps={{ unmountOnExit: true }} square expanded={expanded === element.id} onChange={handleChange(element.id)}>
        <AccordionSummary style={{background: color === 'primary' ? "#04517f" : "#0780c9", color: "white"}} aria-controls={element.id + "-content"} id={element.id + "-header"}>
          <Typography>{element.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </AccordionElement>
  })}
    </>
}