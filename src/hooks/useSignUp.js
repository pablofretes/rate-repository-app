import { SIGN_UP_MUTATION } from '../graphql/mutations';
import { useMutation } from '@apollo/client';


const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP_MUTATION);

    const signUp = async ({ username, password }) => {
        try {
            await mutate({ variables: { username, password } });
        } catch (error) {
            console.log(error);
        }
    };

    return [signUp, result];
};

export default useSignUp;