import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../components/Text';

export const ItemName = ({ fullName, description, language }) => (
    <View>
        <Text testID="full-name" fontSize='subheading' fontWeight='bold'>{fullName}</Text>
        <Text testID="description" color='textSecondary'>{description}</Text>
        <Text testID="language" color='appBar' style={styles.languageStyle}>{language} </Text>
    </View>
);

export const ItemImage = ({ ownerAvatarUrl }) => (
    <Image testID="image" style={styles.imageStyle} source={{uri: ownerAvatarUrl}}/>
);


export const ItemForks = ({ forksCount }) => (
    <View>
        {forksCount >= 1000 ? (
            <View>
                <Text testID="forks" fontWeight='bold'>{Number(forksCount/1000).toFixed(1) + 'k'}</Text>
                <Text>Forks</Text>
            </View>
        ) : (
            <View>
                <Text testID="forks" fontWeight='bold'>{forksCount}</Text>
                <Text>Stars</Text>
            </View>
        )}
    </View>
);

export const ItemStars = ({ stargazersCount }) => (
    <View>
        {stargazersCount >= 1000 ? (
            <View>
                <Text testID="stargazers" fontWeight='bold'>{Number(stargazersCount/1000).toFixed(1) + 'k'}</Text>
                <Text>Stars</Text>
            </View>
        ) : (
            <View>
                <Text testID="stargazers" fontWeight='bold'>{stargazersCount}</Text>
                <Text>Stars</Text>
            </View>
        )}
    </View>
);

export const ItemReviews = ({ reviewCount }) => (
    <View>
        <Text testID="reviews" fontWeight='bold'>{reviewCount}</Text>
        <Text>Reviews</Text>
    </View>
);

export const ItemRating = ({ ratingAverage }) => (
    <View>
        <Text testID="rating" fontWeight='bold'>{ratingAverage}</Text>
        <Text>Rating</Text>
    </View>
);

const styles = StyleSheet.create({
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginLeft: 5,
        alignSelf: 'flex-start',
    },
    languageStyle: {
        alignSelf: 'flex-start',
        borderRadius: 5,
        backgroundColor: '#0366d6',
        padding: 5
    },
});