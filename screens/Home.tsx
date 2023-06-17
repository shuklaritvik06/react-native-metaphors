import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {UserInfo} from '../types/interfaces';

const Home = () => {
  const {params} = useRoute<RouteProp<{params: {user: UserInfo}}, 'params'>>();
  const {user} = params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>{user.email}</Text>
      <View>
        <Image source={{uri: user.picture}} style={styles.image} />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: '700',
  },
  image: {width: 400, height: 400},
});
