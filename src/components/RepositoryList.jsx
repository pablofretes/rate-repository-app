import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { ItemImage, ItemName, ItemForks, ItemRating, ItemStars, ItemReviews } from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  parent:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start'
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingLeft: 10,
    flex: 1,
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
  },
});

const ItemSeparator = () => <View style={styles.separator}/>;

const renderItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.parent}>
      <View>
        <ItemImage ownerAvatarUrl={item.ownerAvatarUrl} />
      </View>
      <View style={styles.text}>
          <ItemName
            fullName={item.fullName} 
            description={item.description} 
            language={item.language}
          />
      </View>
    </View>
    <View style={styles.boxes}>
          <ItemForks forksCount={item.forksCount} />
          <ItemStars stargazersCount={item.stargazersCount} />
          <ItemRating ratingAverage={item.ratingAverage} />
          <ItemReviews reviewCount={item.reviewCount} />
    </View>
  </View>
);

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList 
            data={repositoryNodes} 
            ItemSeparatorComponent={ItemSeparator} 
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

export default RepositoryList;