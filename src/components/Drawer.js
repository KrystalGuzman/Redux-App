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
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
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
      <ListItem button component={Link} to="/Insult">
        <ListItemText primary="Insult" />
      </ListItem>
      <ListItem button component={Link} to="/Advice">
        <ListItemText primary="Advice" />
      </ListItem>
      <ListItem button component={Link} to="/Joke">
        <ListItemText primary="Joke" />
      </ListItem>
      <ListItem button component={Link} to="/Quote">
        <ListItemText primary="Quote" />
      </ListItem>
      </List>

    </div>
  );


  return (
    <div>
        <br></br>
      <Button onClick={toggleDrawer('top', true)}  variant="contained" color="secondary">Menu</Button>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>
  );
}
