import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        <List>
        <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button component={Link} to="/Date">
        <ListItemText primary="Date" />
      </ListItem>
      <ListItem button component={Link} to="/Year">
        <ListItemText primary="Year" />
      </ListItem>
      <ListItem button component={Link} to="/Trivia">
        <ListItemText primary="Trivia" />
      </ListItem>
      <ListItem button component={Link} to="/Number">
        <ListItemText primary="Number" />
      </ListItem>
      </List>

    </div>
  );


  return (
    <div>
        <br></br>
      <Button onClick={toggleDrawer('left', true)}  variant="contained" color="secondary">Menu</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
