import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ItemImage, ItemName, ItemForks, ItemRating, ItemStars, ItemReviews } from './RepositoryItem';
import { useHistory } from 'react-router';
import Order from './Order';

export const stylesCard = StyleSheet.create({
    separator: {
      height: 10
    },
    container: {
      position: 'relative',
      zIndex: 30,
      elevation: 0,
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
      paddingLeft: 5,
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

export const ItemSeparator = () => <View style={stylesCard.separator}/>;
  
const RenderItem = ({ item }) => {
  const history = useHistory();

  return (
    <TouchableOpacity activeOpacity="0.6" onPress={() => history.push(`repo/${item.id}`)}>
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
      </View>
    </TouchableOpacity>
  );
};

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setOrderBy, setSearchKeyword, searchKeyword } = this.props;
    
    return (
      <Order setOrderBy={setOrderBy} setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword}/>
    );
  }

  render () {
    const { repositories } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];
  
    return (
      <FlatList 
        data={repositoryNodes} 
        ItemSeparatorComponent={ItemSeparator} 
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        testID="repo-list"
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer; 