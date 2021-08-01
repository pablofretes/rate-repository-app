import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { AUTHORIZATION } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,
        backgroundColor: '#24292e',
    },
});

const AppBar = () => {
    const { data } = useQuery(AUTHORIZATION);
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();

    const userStatus = data && data.authorizedUser; 

    const signOut = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };

    return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/"><Text color='appBar' fontSize='appBarSize' fontWeight='bold'>Repositories  </Text></Link>
            {userStatus ? (
                    <Link to="/signIn" onPress={() => signOut()}><Text color='appBar' fontSize='appBarSize' fontWeight='bold'>Sign Out</Text></Link>
            ) : (
                <Link to="/signIn"><Text color='appBar' fontSize='appBarSize' fontWeight='bold'>Sign In</Text></Link>
            )}
            
        </ScrollView>
    </View>
    );
};

export default AppBar;