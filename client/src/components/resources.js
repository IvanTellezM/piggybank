import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
    display: "inlineblock"
  },
  media: {
    height: 0,
    paddingTop: '16.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/src/articlePics/article1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          How to Save Money As A Teen
          </Typography>
          <Typography component="p">
          Saving money as a teenager is hard, especially when you have friends who are out buying new clothes and going on weekend trips. But it’s not impossible. Here’s how teens can save.
          Read more at: https://www.moneyunder30.com/how-teens-can-save-money
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          Read more at: https://www.fastweb.com/student-life/articles/smart-ways-to-use-your-graduation-money
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            You Have Student Loan Debt-Now What?
          </Typography>
          <Typography component="p">
          Education is key when dealing with student loan debt. The more you know the better you will be able to handle your repayment obligations.
          Read more at: https://www.fastweb.com/student-life/articles/you-have-student-loan-debt-now-what
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            The 5 Key Componentsof Financial Literacy
          </Typography>
          <Typography component="p">
          The sooner you master these financial concepts, the better.
          Read more at: https://www.fastweb.com/student-life/articles/the-5-key-components-of-financial-literacy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Smart Ways to Use Your Graduation Money
          </Typography>
          <Typography component="p">
          Put your graduation party money to good use and pay off student debt.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);