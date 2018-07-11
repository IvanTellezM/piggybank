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
    marginBottom: 20
  },
  card1: {
    height:600,
    maxWidth: 600,
    display: "inlineblock",
    marginLeft: 100,
    marginBottom: 100
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
              // image={require('./src/articlePics/cash.jpg')}
              title="Piggy Bank"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              Manage your personal finance and achieve your financial goals. Keep track of every penny with in depth report. Plan and save for your next goal in life.
              </Typography>
              <Typography component="p">
              {/* Saving money as a teenager is hard, when you have friends buying new clothes and going on weekend trips. But it’s not impossible. Here’s how teens can save. */}
              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              // image={require("../articlePics/article2.jpg")}
              title="Contemplative Reptile"
            />
          
 
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1">
            Manage your personal finance and achieve your financial goals. 
            Keep track of every penny with in depth report. 
            Plan and save for your next goal in life.
            </Typography>
            <Typography variant="headline" component="h2">
            Welcome to your PiggyBank!
            </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
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