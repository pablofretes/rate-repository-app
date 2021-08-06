import React from 'react';
import { FlatList, View } from 'react-native';
import useReviews from '../hooks/useReviews';
import { ItemSeparator } from '../components/RepositoryListContainer';
import { ReviewItem } from './IndividualRepository';

const Reviews = () => {

    const { authorizedUser } = useReviews();
    const reviews = authorizedUser.reviews.edges.map(edge => edge.node);

    return (
        <View>
            {authorizedUser ? (
                <FlatList 
                    data={reviews}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <ReviewItem item={item}/>}
                    keyExtractor={item => item.id}
                />
            ) : null}
        </View>
    );
};

export default Reviews;