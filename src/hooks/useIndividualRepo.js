import { REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useIndividualRepo = (id) => {
    const { data, loading, error } = useQuery(REPOSITORY, { variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    if(error){
        return `Error, ${error.message}`;
    }

    return { repository: data && data.repository, loading };
};

export default useIndividualRepo;