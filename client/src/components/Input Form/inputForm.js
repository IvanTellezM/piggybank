import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import API from "../../utils/API";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const ranges = [
  {
    value: 'Entertainment',
    label: 'Entertainment',
  },
  {
    value: 'Food',
    label: 'Food',
  },
  {
    value: 'Groceries',
    label: 'Groceries',
  },
  {
    value: 'Transportation',
    label: 'Transportation',
  },
  {
    value: 'Utilities',
    label: 'Utilities',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

class InputAdornments extends React.Component {
  state = {
    transactions: [],
    title: "",
    category: "",
    amount: "",
    date:"",
    note: "",
  };

  // componentDidMount() {
  //   this.loadTransactions();
  // }

  // loadTransactions = (id) => {
  //   API.getAllTransactions()
  //     .then(res =>
  //       this.setState({ transactions: res.data, title: "", category: "", amount: "", note: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("Hi!");
    event.preventDefault();
 
      API.saveTransaction({
        title: this.state.title
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.margin}>
          <TextField>
          <InputLabel htmlFor="adornment-title">Name of the expense</InputLabel>
          <Input
            id="adornment-title"
            value={this.state.title}
            onChange={this.handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
          </TextField>
        </FormControl>
        <TextField
          // label="With normal TextField"
          id="simple-start-adornment col-sm-3 center-xs start-md" 
          value={this.state.date}
          className={classNames(classes.margin, classes.textField)}
          onChange={this.handleInputChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">Date</InputAdornment>,
          }}
        />
        <TextField fullWidth className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </TextField>
        <TextField
          select
          // label="Expense Type"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.category}
          onChange={this.handleInputChange}
          InputProps={{
            startAdornment:<InputAdornment position="start">Category</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-notes">Notes</InputLabel>
          <Input
            id="adornment-notes"
            value={this.state.notes}
            onChange={this.handleInputChange}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Button variant="contained" color="secondary" 
          className={classes.button}
          onClick={this.handleFormSubmit}
        >
         Submit
      </Button>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);