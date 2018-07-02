
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircle from '@material-ui/icons/AddCircle'
import Assessment from '@material-ui/icons/Assessment'
import Event from '@material-ui/icons/Event'
import StarIcon from '@material-ui/icons/Star';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import MailIcon from '@material-ui/icons/Mail';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AddCircle />
      </ListItemIcon>
      <ListItemText primary="New Expense" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Assessment />
      </ListItemIcon>
      <ListItemText primary="Expense Report" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Calendar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalLibrary />
      </ListItemIcon>
      <ListItemText primary="Resources" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="All Expenses" />
    </ListItem>
  </div>
);
