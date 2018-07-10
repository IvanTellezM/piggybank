import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';

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
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit = (event) => {
    // event.preventDefault();

  } 

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          // label="With normal TextField"
          id="simple-start-adornment col-sm-3 center-xs start-md" 
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">Date</InputAdornment>,
          }}
        />
        <TextField
          select
          // label="Expense Type"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.category}
          onChange={this.handleChange('category')}
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
          <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-notes">Notes</InputLabel>
          <Input
            id="adornment-notes"
            value={this.state.notes}
            onChange={this.handleChange('notes')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
        </FormControl>
        <Button variant="contained" color="secondary" className={classes.button} onSubmit={this.handleSubmit()}>
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