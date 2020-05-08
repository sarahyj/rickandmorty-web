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
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function Home() {
  const classes = useStyles();
  const { data, loading } = useQuery(LIST_CHARACTERS);
  const characters = _get(data, 'characters.results', []);

  return (
    <>
      {characters.map(character => {
        console.log('***fjdlksjfkl', character);
        const name = _get(character, 'name', 'John doe');
        const gender = _get(character, 'gender', 'N/A');
        const locationName = _get(character, 'location.name', 'N/A');
        const status = character.status;
        const image = character.image;
        const id = character.id;
        const species = character.species;

        console.log('any text*****', name);
        console.log('hereeeee', image);
        return (
          <div key={character.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Id: {id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name: {name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Gender: {gender}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Location Name: {locationName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Status: {status}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    Species: {species}
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
    </>
  );
}

export default Home;
