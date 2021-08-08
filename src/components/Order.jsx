import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Searchbar } from 'react-native-paper';

const Order = ({ setOrderBy, searchKeyword, setSearchKeyword }) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const onChangeSearch = (query) => setSearchKeyword(query);
    return (
        <View style={{
          position: 'relative',
          zIndex: 50,
          elevation: 50
        }}>
          <Searchbar onChangeText={onChangeSearch} value={searchKeyword} placeholder='Search' />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Order</Button>}
          >
            <Menu.Item onPress={() => setOrderBy('Latest')} title='Latest'/>
            <Divider />
            <Menu.Item onPress={() => setOrderBy('Best')} title='Best'/>
            <Divider />
            <Menu.Item onPress={() => setOrderBy('Worst')} title='Worst'/> 
          </Menu>
        </View>
    );
};

export default Order;