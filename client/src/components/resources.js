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
    maxWidth: 400,
    display: "inlineblock", 
    marginBottom: 20
  },
  card1: {
    maxWidth: 400,
    display: "inlineblock",
    marginLeft: 100,
    marginBottom: 20
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
              image={require("../articlePics/article1.jpg")}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              How to Save Money As A Teen
              </Typography>
              <Typography component="p">
              Saving money as a teenager is hard, when you have friends buying new clothes and going on weekend trips. But it’s not impossible. Here’s how teens can save.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.moneyunder30.com/how-teens-can-save-money" size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article2.jpg")}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
               Graduation Money
              </Typography>
              <Typography component="p">
              Learn smart ways to put your graduation party money to good use and pay off student debt. Learn how in this helpful article.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.fastweb.com/student-life/articles/smart-ways-to-use-your-graduation-money" size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
       <Grid item xs={6}>
          <Card className={classes.card1}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article3.jpg")}
              title="Contemplative Reptile"
        />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                You Have Student Loan Debt-Now What?
              </Typography>
              <Typography component="p">
                Education is key. The more you know the better you will be able to handle your repayment obligations.
              </Typography>
            </CardContent>
            <CardActions>
              <Button  href="https://www.fastweb.com/student-life/articles/you-have-student-loan-debt-now-what" size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

       <Grid item xs={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article4.jpg")}
              title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              The 5 Key Componentsof Financial Literacy
            </Typography>
            <Typography component="p">
              The sooner you master these financial concepts, the better you will be to manage your finances.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.fastweb.com/student-life/articles/the-5-key-components-of-financial-literacy" size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
        </Grid>


      <Grid item xs={6}>
          <Card className={classes.card1}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article5.jpg")}
              title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              How to Survive on a Student Budget
            </Typography>
            <Typography component="p">
              With a few tips and tricks, budgeting can become second nature.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.fastweb.com/student-life/articles/how-to-survive-on-a-student-budget" size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
        </Grid>


      <Grid item xs={6}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article6.jpg")}
              title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Budgeting for Graduate Applications
            </Typography>
            <Typography component="p">
              Here are some typical costs to keep in mind when planning your graduate application budget.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.fastweb.com/student-life/articles/budgeting-for-graduate-applications" size="small" color="primary">
              Learn More
            </Button>
           </CardActions>
           </Card>
      </Grid>

      <Grid item xs={6}>
          <Card className={classes.card1}>
            <CardMedia
              className={classes.media}
              image={require("../articlePics/article7.jpg")}
              title="Contemplative Reptile"
        />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              30 Easy Ways to Save Money This Semester
            </Typography>
            <Typography component="p">
              There are easy ways to scrimp and save on just about everything.
            </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.fastweb.com/student-life/articles/the-30-easy-ways-to-save-money-this-semester" size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
      </Grid>


    <Grid item xs={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require("../articlePics/article8.jpg")}
            title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            5 Ways Students Can Save Money in College
          </Typography>
          <Typography component="p">
            Learn how you can easily save money in college with these tips.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://www.fastweb.com/student-life/articles/five-ways-students-can-save-money-in-college" size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
        </Card>
      </Grid>


    <Grid item xs={6}>
        <Card className={classes.card1}>
          <CardMedia
            className={classes.media}
            image={require("../articlePics/article9.jpg")}
            title="Contemplative Reptile"
        />
         <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            How to Build Good Credit in College
          </Typography>
          <Typography component="p">
            The Dos and Don’ts of Credit Cards in College. To build great credit ratings. 
          </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.thebalance.com/top-money-mistakes-college-students-make-1289967" size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
          </Card>
        </Grid>


    <Grid item xs={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require("../articlePics/article10.jpg")}
            title="Contemplative Reptile"
        />
          <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            3 Recent College Grads Share Student Loan Tips
          </Typography>
          <Typography component="p">
            College students should understand their loans and consider their return on investment.
          </Typography>
          </CardContent>
          <CardActions>
            <Button href="https://www.usnews.com/education/best-colleges/paying-for-college/articles/2017-05-10/3-recent-college-grads-share-student-loan-tips" size="small" color="primary">
              Learn More
            </Button>
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