import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';
import IndividualRepository from './IndividualRepository';
import CreateReview from './CreateReview';
import SignUp from './SignUp';
import Reviews from './Reviews';

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
                <Route path="/repo/:id" component={IndividualRepository}/>
                <Route path="/createReview" component={CreateReview}/>
                <Route path="/signUp" component={SignUp} />
                <Route path="/reviews" component={Reviews} />
            </Switch>
        </SafeAreaView>
    );
};

export default Main;