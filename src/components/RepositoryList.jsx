import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedText] = useDebounce(searchKeyword, 500);

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

  if(debouncedText && debouncedText.length > 0){
    values.searchKeyword = debouncedText;
  }

  const { repositories } = useRepositories(values);

  return (
    <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword}/>
  );
};

export default RepositoryList;