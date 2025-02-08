import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  name: string;
  setActiveItem: (name: string) => void;
  activeItem: string;
  closeDrawer: () => void;
}

const DrawerItem = (props: Props) => {
  const {name, setActiveItem, closeDrawer, activeItem} = props;
  return (
    <TouchableOpacity
      key={name}
      onPress={() => {
        setActiveItem(name), closeDrawer();
      }}
      style={[
        styles.drawerItem,
        activeItem === name && styles.activeDrawerItem, // Apply active styles
      ]}>
      <Text
        style={[
          styles.drawerText,
          activeItem === name && styles.activeDrawerText,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  activeDrawerItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white (like image)
  },
  drawerText: {
    fontSize: 18,
    color: 'white',
  },
  activeDrawerText: {
    color: '#FF6363', // Red color for active text (as in the image)
    fontWeight: 'bold',
  },
});
