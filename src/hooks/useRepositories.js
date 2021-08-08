import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (values) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { 
      orderBy: values.orderBy, 
      orderDirection: values.orderDirection,
      searchKeyword: values.searchKeyword
    }
  });

  if(error){
    return `Error: ${error.message}`;
  }

  return { repositories: data && data.repositories, loading };
};

export default useRepositories;