import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    Username: '',
    Password: ''       
};

const validationSchema = yup.object().shape({
    Username: yup
        .string()
        .required()
        .min(4, 'Username must contain 4 or more characters'),
    Password: yup
        .string()
        .required()
        .min(4, 'Password must contain 4 or more characters'),
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="Username" placeholder="Username" style={styles.inputs}/>
            <FormikTextInput name="Password" placeholder="Password" secureTextEntry style={styles.inputs}/>
            <Pressable onPress={onSubmit}>
                <Text color='appBar' style={styles.signIn}>Sign In</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        const username = values.Username;
        const password = values.Password;

        try {
            const data = await signIn({ username, password });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

const styles = StyleSheet.create({
    signIn: {
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

export default SignIn;