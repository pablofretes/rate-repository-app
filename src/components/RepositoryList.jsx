import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('');
  let values = {};

  if(!orderBy){
    values.orderBy = 'CREATED_AT';
    values.orderDirection = 'DESC';
  }

  if (orderBy === 'Latest' || orderBy === ''){
    values.orderBy = 'CREATED_AT';
    values.orderDirection = 'DESC';
  }

  if(orderBy === 'Best'){
    values.orderBy = 'RATING_AVERAGE';
    values.orderDirection = 'DESC';
  }

  if(orderBy === 'Worst'){
    values.orderBy = 'RATING_AVERAGE';
    values.orderDirection = 'ASC';
  }

  const { repositories } = useRepositories(values);

  return (
    <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy}/>
  );
};

export default RepositoryList;