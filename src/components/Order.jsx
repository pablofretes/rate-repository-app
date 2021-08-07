import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';

const Order = ({ setOrderBy }) => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <View style={{
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 50,
          elevation: 50
        }}>
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