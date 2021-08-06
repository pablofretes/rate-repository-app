import { useMutation } from '@apollo/client';
import { SIGN_IN_MUTATION } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN_MUTATION);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        try {
            const { data } = await mutate({ variables: { username, password } });

            await authStorage.setAccessToken(data.authorize.accessToken);
            await apolloClient.resetStore();

            return data.authorize;
        } catch (error) {
            console.log(error); 
        }

    };

    return [signIn, result];
};

export default useSignIn;