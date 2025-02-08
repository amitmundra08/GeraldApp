import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import DrawerMenu from '../components/DrawerMenu';

const drawerItems = [
  {name: 'Start'},
  {name: 'Your Cart'},
  {name: 'Favourites'},
  {name: 'Your Orders'},
];

const {width} = Dimensions.get('window');

const Home = () => {
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: withTiming(translateX.value, {duration: 300})}, // Smooth slide effect
      {scale: withTiming(translateX.value > 0 ? 0.85 : 1, {duration: 300})}, // Scale down
      {
        rotateZ: withTiming(translateX.value > 0 ? '-15deg' : '0deg', {
          duration: 300,
        }),
      },
    ],
    borderRadius: translateX.value > 0 ? 20 : 0,
    overflow: 'hidden',
  }));

  const animateDrawerStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(translateX.value * 0.25, {duration: 300})},
    ],
  }));

  const animateSignoutStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: withTiming(-(translateX.value * 0.05), {duration: 300})},
    ],
  }));

  const openDrawer = () => (translateX.value = width * 0.6);
  const closeDrawer = () => (translateX.value = 0);

  return (
    <GestureHandlerRootView style={styles.body}>
      <View style={styles.container}>
        <DrawerMenu
          drawerItems={drawerItems}
          closeDrawer={closeDrawer}
          animateDrawerStyle={animateDrawerStyle}
          defaultActiveValue={drawerItems[0].name}
          FooterComponent={
            <Animated.View style={[styles.signOut, animateSignoutStyle]}>
              <Text style={styles.singOutText}>Sign Out</Text>
            </Animated.View>
          }
        />
        <PanGestureHandler
          onGestureEvent={event =>
            //@ts-ignore
            (translateX.value = event.translationX > 50 ? width * 0.6 : 0)
          }>
          <Animated.View style={[styles.mainScreen, animatedStyle]}>
            <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
              <Text style={[styles.menuText, styles.iconStyle]}>☰ </Text>
              <Text style={styles.menuText}>Start</Text>
            </TouchableOpacity>
            <Text style={styles.contentText}>Welcome to Home Screen</Text>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default Home;
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121026',
  },
  signOut: {
    marginTop: 'auto',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  mainScreen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 80,
  },
  iconStyle: {
    paddingBottom: 4,
    textAlign: 'center',
    marginRight: 4,
  },
  singOutText: {
    fontSize: 18,
    color: 'white',
  },
});
