import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

const initialValues = {
    Username: '',
    Password: ''       
};

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
    const onSubmit = (values) => {
        const username = values.Username;
        const password = values.Password;

        console.log(username, password);
    };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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