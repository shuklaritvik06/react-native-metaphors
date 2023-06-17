import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OAuth from './screens/OAuth';
import Phone from './screens/Phone';
import Email from './screens/Email';
import {Button, PermissionsAndroid, View} from 'react-native';
import Notification from './screens/Notification';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Store from './screens/Store';
import {useNavigation} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YourOrders from './screens/YourOrders';
import Wishlist from './screens/Wishlist';
import DrawerContent from './screens/DrawerContent';
import AnimatedNative from './screens/Animated';
import ReAnimated from './screens/ReAnimated';
import GestureHandler from './screens/GestureHandler';
import Swipable from './screens/Swipable';
import LongPress from './screens/LongPress';
import PulltoRefresh from './screens/PulltoRefresh';
import PinchZoom from './screens/PinchZoom';
import InfiniteScroll from './screens/InfiniteScroll';
import ExpandedList from './screens/ExpandedList';
import Onboarding from './screens/Onboarding';
import Pagination from './screens/Pagination';
import Grid from './screens/Grid';
import Modals from './screens/Modals';
import Permission from './screens/Permission';
import Geolocations from './screens/Geolocation';
import AccesstoGallery from './screens/AccesstoGallery';
import DownloadFile from './screens/DownloadFile';
import SyncImageCloud from './screens/SyncImageCloud';
import Webview from './screens/Webview';

const Tab = createMaterialBottomTabNavigator();

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        headerLeft: () => (
          <View>
            <Button
              title="Click"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          </View>
        ),
      }}>
      <HomeStack.Screen name="Start" component={OAuth} />
      <HomeStack.Screen name="Phone" component={Phone} />
      <HomeStack.Screen name="Email" component={Email} />
      <HomeStack.Screen name="Notif" component={Notification} />
      <HomeStack.Screen name="Animation" component={AnimatedNative} />
      <HomeStack.Screen name="Reanimated" component={ReAnimated} />
      <HomeStack.Screen name="Gesture" component={GestureHandler} />
      <HomeStack.Screen name="Swipable" component={Swipable} />
      <HomeStack.Screen name="LongPress" component={LongPress} />
      <HomeStack.Screen name="PulltoRefresh" component={PulltoRefresh} />
      <HomeStack.Screen name="PinchZoom" component={PinchZoom} />
      <HomeStack.Screen name="Infinite" component={InfiniteScroll} />
      <HomeStack.Screen name="Expanded" component={ExpandedList} />
      <HomeStack.Screen name="Onboarding" component={Onboarding} />
      <HomeStack.Screen name="Pagination" component={Pagination} />
      <HomeStack.Screen name="Grid" component={Grid} />
      <HomeStack.Screen name="Modals" component={Modals} />
      <HomeStack.Screen name="Permission" component={Permission} />
      <HomeStack.Screen name="Geolocation" component={Geolocations} />
      <HomeStack.Screen name="AccesstoGallery" component={AccesstoGallery} />
      <HomeStack.Screen name="DownloadFile" component={DownloadFile} />
      <HomeStack.Screen name="SyncFile" component={SyncImageCloud} />
      <HomeStack.Screen name="Webview" component={Webview} />
    </HomeStack.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={YourOrders}
        options={{
          tabBarLabel: 'Orders',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bank" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabel: 'wishlist',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bank" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bank" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={TabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
