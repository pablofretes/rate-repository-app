import React from 'react';
import { View, Pressable, StyleSheet, FlatList } from 'react-native';
import { ItemImage, ItemName, ItemForks, ItemRating, ItemStars, ItemReviews } from './RepositoryItem';
import { stylesCard, ItemSeparator } from './RepositoryListContainer';
import { useParams } from 'react-router';
import useIndividualRepo from '../hooks/useIndividualRepo';
import * as WebBrowser from 'expo-web-browser';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  linkStyle: {
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#0366d6',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  parentLink: {
    padding: 8,
    flex: 1
  },
  reviewContainerStyle: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#d3d3d3',
    padding: 13,
    marginTop: 5,
  },
  parent: {
    flexDirection: 'row',
    flexGrow: 0,
    flex: 1
  },
  ratingContainerStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderStyle: 'solid',
    color: '#0366d6',
    borderColor: '#0366d6',
    borderWidth: 2,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  ratingStyle: {
    alignSelf: 'center'
  },
  nameStyle: {
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 15,
  },
});

const CardItem = ({ item }) => {
  const openGithub = () => {
    WebBrowser.openBrowserAsync(item.url);
  };
  return (
    <View style={stylesCard.container}>
      <View style={stylesCard.parent}>
        <View>
          <ItemImage ownerAvatarUrl={item.ownerAvatarUrl} />
        </View>
        <View style={stylesCard.text}>
            <ItemName
              fullName={item.fullName} 
              description={item.description} 
              language={item.language}
            />
        </View>
      </View>
      <View style={stylesCard.boxes}>
            <ItemForks forksCount={item.forksCount} />
            <ItemStars stargazersCount={item.stargazersCount} />
            <ItemRating ratingAverage={item.ratingAverage} />
            <ItemReviews reviewCount={item.reviewCount} />
      </View>
      <View style={styles.parentLink}>
        <Pressable style={styles.linkStyle} onPress={() => openGithub()}>
          <Text color='appBar' fontSize='subheading' fontWeight='bold'>Open in GitHub</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const ReviewItem = ({ item }) => {
  return (
    <View style={styles.reviewContainerStyle}>
      <View style={styles.parent}>
        <View style={styles.ratingContainerStyle}>
          <Text style={styles.ratingStyle} fontWeight='bold' fontSize='subheading' color='textPrimary'>{item.rating}</Text>
        </View>
        <View style={styles.nameStyle}>
          <Text fontWeight='bold' fontSize='subheading'>{item.user.username}</Text>
          <Text fontSize='subheading'>{format(new Date(item.createdAt), 'dd-MM-yyyy')}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  );
};

const IndividualRepository = () => {
    const params = useParams();
    const id = params.id;
    const { repository } = useIndividualRepo(id);

    const reviews = repository ? repository.reviews.edges.map(edge => edge.node) : [];
    return (
      <View>
        {repository ? (
          <FlatList
            data={reviews}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <CardItem item={repository} />}
          />
        ) : null}
      </View>
    );
};

export default IndividualRepository;