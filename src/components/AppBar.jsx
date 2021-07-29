import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 20,
        backgroundColor: '#24292e',
    },
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <Link to="/"><Text color='appBar' fontSize='appBarSize' fontWeight='bold'>Repositories  </Text></Link>
            <Link to="/signIn"><Text color='appBar' fontSize='appBarSize' fontWeight='bold'>Sign In</Text></Link>
        </ScrollView>
    </View>
    );
};

export default AppBar;