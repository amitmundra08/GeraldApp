import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import DummyScreen from './DummyScreen';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF6363',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/home.png')} // Ensure the image is inside the assets folder
              style={{width: size, height: size, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
        component={(props: any) => <Home />}
      />
      <Tab.Screen
        //@ts-ignore
        screenOptions={{
          tabBarActiveTintColor: '#FF6363',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
        name="Settings"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/settings.png')} // Ensure the image is inside the assets folder
              style={{width: size, height: size, tintColor: color}}
              resizeMode="contain"
            />
          ),
        }}
        component={(props: any) => (
          <DummyScreen {...props} title="Settings Screen" />
        )}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
