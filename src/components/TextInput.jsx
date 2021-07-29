/* eslint-disable no-unused-vars */
import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    invalid: {
        borderColor: '#d73a4a'
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, error && styles.invalid];

    return <NativeTextInput style={textInputStyle} {...props}/>;
};

export default TextInput;