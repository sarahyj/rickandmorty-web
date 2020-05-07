import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LIST_CHARACTERS } from '../graphql/main';
import _get from 'lodash/get';

function Home() {
  const { data, loading } = useQuery(LIST_CHARACTERS);
  const characters = _get(data, 'characters.results', []);

  console.log('characters', characters);

  console.log('data', data, loading);
  return (
    <>
      {characters.map(character => {
        const name = _get(character, 'name', 'John doe');
        const gender = _get(character, 'gender', 'N/A');
        console.log('char', name, gender);
        return <div key={character.id}></div>;
      })}
    </>
  );
}

export default Home;
