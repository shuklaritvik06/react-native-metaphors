import {SafeAreaView, Button, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationProp} from '@react-navigation/native';

const OAuth = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  GoogleSignin.configure();
  const fetchUser = async (token: string) => {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        navigation.navigate('Home', {
          user: data,
        });
      });
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      await fetchUser(tokens.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btn}>
        <Button onPress={() => signIn()} title="Google Login" />
      </View>
      <Text onPress={() => navigation.navigate('Phone')} style={styles.text}>
        Phone Auth
      </Text>
      <Text onPress={() => navigation.navigate('Email')} style={styles.text}>
        Email Auth
      </Text>
      <Text onPress={() => navigation.navigate('Notif')} style={styles.text}>
        Notification
      </Text>
      <Text onPress={() => navigation.navigate('Store')} style={styles.text}>
        Store
      </Text>
      <Text
        onPress={() => navigation.navigate('Animation')}
        style={styles.text}>
        Animation
      </Text>
      <Text
        onPress={() => navigation.navigate('Reanimated')}
        style={styles.text}>
        Reanimated
      </Text>
      <Text onPress={() => navigation.navigate('Gesture')} style={styles.text}>
        Gesture
      </Text>
      <Text onPress={() => navigation.navigate('Swipable')} style={styles.text}>
        Swipable
      </Text>
      <Text
        onPress={() => navigation.navigate('LongPress')}
        style={styles.text}>
        LongPress
      </Text>
      <Text
        onPress={() => navigation.navigate('PulltoRefresh')}
        style={styles.text}>
        PulltoRefresh
      </Text>
      <Text
        onPress={() => navigation.navigate('PinchZoom')}
        style={styles.text}>
        PinchZoom
      </Text>
      <Text onPress={() => navigation.navigate('Infinite')} style={styles.text}>
        Infinite
      </Text>
      <Text onPress={() => navigation.navigate('Expanded')} style={styles.text}>
        Expanded
      </Text>
      <Text
        onPress={() => navigation.navigate('Onboarding')}
        style={styles.text}>
        Onboarding
      </Text>
      <Text
        onPress={() => navigation.navigate('Pagination')}
        style={styles.text}>
        Pagination
      </Text>
      <Text onPress={() => navigation.navigate('Grid')} style={styles.text}>
        Grid
      </Text>
      <Text onPress={() => navigation.navigate('Modals')} style={styles.text}>
        Modals
      </Text>
      <Text
        onPress={() => navigation.navigate('Permission')}
        style={styles.text}>
        Permissions
      </Text>
      <Text
        onPress={() => navigation.navigate('Geolocation')}
        style={styles.text}>
        Geolocation
      </Text>
      <Text
        onPress={() => navigation.navigate('AccesstoGallery')}
        style={styles.text}>
        Access to Gallery (Camera Roll)
      </Text>
      <Text
        onPress={() => navigation.navigate('DownloadFile')}
        style={styles.text}>
        Download File
      </Text>
      <Text onPress={() => navigation.navigate('SyncFile')} style={styles.text}>
        Sync File
      </Text>
      <Text onPress={() => navigation.navigate('Webview')} style={styles.text}>
        Web View
      </Text>
    </SafeAreaView>
  );
};

export default OAuth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: 10,
  },
  text: {
    color: 'black',
  },
});
