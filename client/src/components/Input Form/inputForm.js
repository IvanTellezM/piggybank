import React, { Component } from 'react';
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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import API from "../../utils/API";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  card: {
    width: "90%",
    marginTop: 50,
    marginLeft: 65,
  }
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

class InputAdornments extends Component {
  state = {
    transactions: [],
    title: "",
    category: "",
    amount: "",
    date:"",
    note: "",
  };

  componentDidMount() {
    // this.loadTransactions();
  }

  loadTransactions = () => {
    API.getAllTransactions()
      .then(res => 
        console.log(res.data)
      )
      .catch(err => console.log(err))
      console.log(this.state.transactions)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("Submitting from front");
    console.log(this.state);
    event.preventDefault();
 
      API.saveTransaction({
        title: this.state.title,
        category: this.state.category,
        amount: this.state.amount,
        date: this.state.date,
        note: this.state.note
        
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
        <h1 align='center' >Add a Transaction</h1>
          <CardContent>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Name of the Expense</InputLabel>
            <Input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              startAdornment={<InputAdornment position="start"></InputAdornment>}
            />
            </FormControl>
            <FormControl>
              <InputLabel>Date</InputLabel>
              <Input
                // label="With normal TextField"
                
                id="simple-start-adornment col-sm-3 center-xs start-md" 
                value={this.state.date}
                name="date"
                // className={classNames(classes.formControl)}
                onChange={this.handleInputChange}

                startAdornment= {<InputAdornment position="start"></InputAdornment>}

              />
            </FormControl>  
            {/* <TextField fullWidth className={classNames(classes.formControl, classes.textField)}>
              <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.amount}
                onChange={this.handleInputChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </TextField> */}
            <TextField
              select
              // label="Expense Type"
              className={classNames(classes.formControl, classes.textField)}
              value={this.state.category}
              name="category"
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
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
              <Input
                id="adornment-amount"
                value={this.state.amount}
                name="amount"
                onChange={this.handleInputChange}
                startAdornment={<InputAdornment position="start"></InputAdornment>}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="adornment-note">Note</InputLabel>
              <Input
                id="adornment-note"
                value={this.state.note}
                name="note"
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
        </CardContent>
        </Card>
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);