import { AUTHORIZATION } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const useReviews = () => {
    const { data, loading, error } = useQuery(AUTHORIZATION);

    if(error){
        console.log(error);
    }

    return { authorizedUser: data && data.authorizedUser, loading };
};

export default useReviews;