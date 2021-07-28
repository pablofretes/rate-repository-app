import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        backgroundColor: '#24292e',
    },
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <Pressable>
            <Text color='appBar' fontSize='subheading' fontWeight='bold'>Repositories</Text>
        </Pressable>
    </View>
    );
};

export default AppBar;