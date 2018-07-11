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
              image={require('../../articlePics/box.jpg')}
              title="Piggy Bank"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              
              </Typography>
              <Typography component="p">
             
              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
            {/* <CardMedia
              className={classes.media}
              // image={require("../articlePics/article2.jpg")}
              title="Contemplative Reptile"
            /> */}
          
 
          <CardContent>
            <Typography variant="headline" component="h2"style={{ textAlign: 'center' }}>
            Welcome to your PiggyBank!
            </Typography>
            <Typography gutterBottom variant="headline" component="h1" style={{ textAlign: 'center' }} variant="display2">

            Manage your personal finance and achieve your financial goals. 
            Keep track of every penny with in depth report. 
            Plan and save for your next goal in life.

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