import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import useSignUp from '../hooks/useSignUp';
import { useHistory } from 'react-router-native';

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required()
        .min(1, 'Username must contain at least 1 character')
        .max(30, 'Username must not contain more than 30 characters'),
    password: yup
        .string()
        .required()
        .min(5, 'Password must contain at least 5 characters')
        .max(50, 'Password must not contain more than 50 characteres'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must be the same!')
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name='username' placeholder='Username' style={styles.inputs}/>
            <FormikTextInput name='password' placeholder='Password' style={styles.inputs} secureTextEntry/>
            <FormikTextInput name='passwordConfirmation' placeholder='Please confirm your password' style={styles.inputs} secureTextEntry/>
            <Pressable onPress={onSubmit}>
                <Text color='appBar' style={styles.signUp}>Sign Up</Text>
            </Pressable>
        </View>
    );
};

const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit}/>}
        </Formik>
    );
};

const SignUp = () => {
    const [signIn] = useSignIn();
    const [signUp, result] = useSignUp();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            await signUp({ username, password });
            if(result){
                await signIn({ username, password });
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return <SignUpContainer onSubmit={onSubmit}/>;
};

const styles = StyleSheet.create({
    signUp: {
        backgroundColor: '#0366d6',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 8,
        height: 50,
        width: 300,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    inputs: {
        margin: 10,
        borderRadius: 5,
        padding: 15,
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
});


export default SignUp;