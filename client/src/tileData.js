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
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText primary="New Expense" />
      </ListItem>
      <ListItem button onClick={() => props.expenseReport()}>
        <ListItemIcon>
          <Assessment />
        </ListItemIcon>
        <ListItemText primary="Expense Report" />
      </ListItem>
      <ListItem button onClick={() => props.resources()}>
        <ListItemIcon>
          <LocalLibrary />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItem>
    </div>
)};

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
