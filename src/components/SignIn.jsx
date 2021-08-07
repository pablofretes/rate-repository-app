import React from 'react';
import { useHistory } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn = () => {
    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const username = values.Username;
        const password = values.Password;

        try {
            await signIn({ username, password });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

  return (
      <SignInContainer onSubmit={onSubmit} />
    );
};
export default SignIn;