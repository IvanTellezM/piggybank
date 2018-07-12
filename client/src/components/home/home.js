import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  card: {
    height: 600,
    maxWidth: 600,
    display: "inlineblock", 
    marginBottom: 20,
    backgroundColor: "yellowcd"
    
  },
  card1: {
    height:600,
    maxWidth: 600,
    display: "inlineblock",
    marginLeft: 100,
    marginBottom: 100
  },
  media: {
    height: 600,
    width: 600,
    paddingTop: '1', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div className={styles.root}>
      <Grid container spacing={24}>

        <Grid item xs={6}>
          <Card className={classes.card1} >
          <CardMedia
              className={classes.media}
              image={require('../../articlePics/money.jpg')}
              title="Piggy Bank"
            />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
          <CardContent>

            <Typography variant="display3" component="h1"style={{ textAlign: 'center', color:'#ff6600' }}>
            Welcome To PiggyBank!
            </Typography>

            
            <Typography variant="display1" style={{ color:'white'}} gutterBottom>
            hhhjhfjhfkjhfkjhfkjfhkjfhs
            </Typography>
             

            <Typography variant="display1" style={{ color:'#663300'}} gutterBottom>
            * Manage your personal finance
            </Typography>

            <Typography variant="display1" style={{ color:'#663300'}} gutterBottom>
            * Achieve your financial goals
            </Typography>

            <Typography variant="display1" style={{ color:'#663300'}} gutterBottom>
            * Keep track of every penny spent
            </Typography>

            <Typography variant="display1" style={{ color:'#663300'}} gutterBottom>
            * Plan for the future
            </Typography>

          </CardContent>
          </Card>
        </Grid>    
      </Grid>
    </div>
  );
}
SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);