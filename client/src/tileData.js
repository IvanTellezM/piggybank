import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircle from '@material-ui/icons/AddCircle'
import Assessment from '@material-ui/icons/Assessment'
import StarIcon from '@material-ui/icons/Star';
import LocalLibrary from '@material-ui/icons/LocalLibrary';

export const MailFolderListItems = (props) => {
  return(
    <div>
      <ListItem button onClick={() => props.addExpense()}>
        <ListItemIcon style={{ color:'#00ff00'}}>
          <AddCircle /> 
        </ListItemIcon>
        <ListItemText primary="New Expense" />
      </ListItem>
      <ListItem button onClick={() => props.expenseReport()}>
        <ListItemIcon style={{ color:'#ffcc00'}} >
          <Assessment />
        </ListItemIcon>
        <ListItemText primary="Expense Report" />
      </ListItem>
      <ListItem button onClick={() => props.resources()}>
        <ListItemIcon style={{ color:'#0066ff'}}>
          <LocalLibrary />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItem>
    </div>
)};

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{ color:'#ff66cc'}}>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="All Expenses" />
    </ListItem>
  </div>
);
