import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { blue } from '@material-ui/core/colors';
import clsx from  'clsx';
import { Button, withStyles } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  itemPrimary: {
    '&:hover': {
      color: theme.palette.getContrastText(blue[900]),
		  backgroundColor: blue[900],
    },
    color: theme.palette.getContrastText(blue[800]),
		backgroundColor: blue[800],
  },
  itemSecondary: {
    color: theme.palette.getContrastText(blue[600]),
		backgroundColor: blue[600],
  },
  itemSecondaryHover: {
    '&:hover': {
      color: theme.palette.getContrastText(blue[700]),
		  backgroundColor: blue[700],
    },
  }
}));

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(orange[500]),
		backgroundColor: orange[500],
		'&:hover': {
			backgroundColor: orange[700],
		},
	},
}))(Button);

export const ItemMain = ({children, root = true}) => {
  const classes = useStyles();
  children = React.Children.toArray(children).map(child => {
    return React.cloneElement(child, {root})
  })
  return <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={root ? classes.root : classes.itemSecondary}
      disablePadding={!root}
  >
    {children}
  </List>
}

const ItemLeaf = ({text, code, root, onClick}) => {
  const classes = useStyles();
  return <ListItem className={root ? classes.itemPrimary : classes.nested}>
      <ListItemText primary={text} /><ColorButton onClick={() => onClick(code, text)} variant="contained" color="primary">Voir<AddIcon /></ColorButton>
  </ListItem>
}

const ItemNode = ({text, code, children, root}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  children = React.Children.toArray(children).map(child => {
    return React.cloneElement(child, {root: false})
  })

  const handleClick = () => {
    setOpen(!open);
  };

  return <><ListItem className={root ? classes.itemPrimary : clsx(classes.itemPrimary, classes.nested, classes.itemSecondaryHover)} button onClick={handleClick}>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
    </Collapse></>
}

export const Item = ({text, code, children, root, onClick}) => {
  if(children) {
    return <ItemNode root={root} code={code} text={text}><ItemMain root={false}>{children}</ItemMain></ItemNode>
  } else {
    return <ItemLeaf root={root} code={code} text={text} onClick={onClick}/>
  }
}

const ItemListChild = ({elements, root, onClick}) => {
  return <>{elements.map(element => {
    if(element.children && element.children.length > 0) {
       return <Item onClick={onClick} root={root} code={element.code} text={element.text ?? ""}><ItemListChild elements={element.children} onClick={onClick} /></Item>
    } else {
       return <Item onClick={onClick} root={root} code={element.code} text={element.text ?? ""}/>
    }
  })}</>
}

export const ItemList = ({elements = [], onClick}) => {
  return <ItemMain>
    <ItemListChild onClick={onClick} elements={elements} />
  </ItemMain>
}