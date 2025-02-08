import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import DrawerItem from './DrawerItem';

interface Props {
  drawerItems: {name: string}[];
  closeDrawer: () => void;
  animateDrawerStyle: any;
  FooterComponent?: React.ReactNode;
  defaultActiveValue: string;
}

const DrawerMenu = (props: Props) => {
  const {
    drawerItems,
    closeDrawer,
    animateDrawerStyle,
    FooterComponent,
    defaultActiveValue,
  } = props;
  const [activeItem, setActiveItem] = React.useState(defaultActiveValue);

  return (
    <Animated.View style={[styles.drawerContainer, animateDrawerStyle]}>
      <Text style={styles.drawerTitle}>Beka</Text>
      {drawerItems.map(item => (
        <View key={item.name}>
          <DrawerItem
            name={item.name}
            setActiveItem={setActiveItem}
            closeDrawer={closeDrawer}
            activeItem={activeItem}
          />
        </View>
      ))}
      {FooterComponent && <>{FooterComponent}</>}
    </Animated.View>
  );
};
export default DrawerMenu;

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '60%',
    backgroundColor: '#121026',
    padding: 20,
    marginTop: 48,
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  signOut: {
    marginTop: 'auto',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  singOutText: {
    fontSize: 18,
    color: 'white',
  },
});
