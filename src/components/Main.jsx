import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#f5f5f5'
    },
});

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AppBar />
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </SafeAreaView>
    );
};

export default Main;