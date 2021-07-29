import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';

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
            <Switch>
                <Route path="/" exact component={RepositoryList} />
                <Route path="/signIn" component={SignIn} />
            </Switch>
        </SafeAreaView>
    );
};

export default Main;