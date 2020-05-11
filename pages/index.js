import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LIST_CHARACTERS } from '../graphql/main';
import _get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 528
  },
  media: {
    height: 280
  },
  cardWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100
  },
  cardStyle: {
    minWidth: 345,
    marginRight: 25,
    marginBottom: 25
  },
  title: { color: 'blue' },
  info: { fontSize: 20 }
});

function Home() {
  const classes = useStyles();
  const { data, loading } = useQuery(LIST_CHARACTERS);
  const characters = _get(data, 'characters.results', []);

  return (
    <div className={classes.cardWrapper}>
      {characters.map(character => {
        const name = _get(character, 'name', 'John doe');
        const gender = _get(character, 'gender', 'N/A');
        const locationName = _get(character, 'location.name', 'N/A');
        const status = character.status;
        const image = character.image;
        const id = character.id;
        const species = character.species;

        return (
          <div key={character.id} className={classes.cardStyle}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Id: </span>
                    <span className={classes.info}>{id}</span>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Name: </span>{' '}
                    <span className={classes.info}>{name}</span>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Gender: </span>{' '}
                    <span className={classes.info}>{gender}</span>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Location Name: </span>
                    <span className={classes.info}>{locationName}</span>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Status: </span>
                    <span className={classes.info}>{status}</span>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="h2">
                    <span className={classes.title}>Species: </span>
                    <span className={classes.info}>{species}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
