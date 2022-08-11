import { useEffect } from 'react';

// Components
import Card from './Card';
import Skeleton from './Skeleton';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../app/app-slice';
import { RootState } from '../app/store';

import { Characters, CharactersVars } from '../app/types';

// GraphQL
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '../hooks/queries';

function List(): JSX.Element {
  const pageId = useSelector((state: RootState) => state.app.page);
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery<Characters, CharactersVars>(
    GET_ALL_CHARACTERS,
    { variables: { page: pageId } }
  );

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data, pageId]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 grid-flow-row">
        {[...Array(20)].map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error :(</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 grid-flow-row">
      {data?.characters.results.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default List;
