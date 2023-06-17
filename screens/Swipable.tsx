import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import firestore from '@react-native-firebase/firestore';

const data = [
  {text: 'Hello'},
  {text: 'Testing'},
  {text: 'Swipable'},
  {text: 'Gesture'},
];

const Swipable = () => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Swipeable
          renderLeftActions={() => <View className="w-56 h-56 bg-blue-400" />}
          renderRightActions={() => <View className="w-56 h-56 bg-red-500" />}
          onSwipeableOpen={(
            direction: 'left' | 'right',
            swipeable: Swipeable,
          ) => {
            if (direction === 'left') {
              firestore()
                .collection('BookMark')
                .add({
                  text: item.text,
                })
                .then(() => {
                  console.log('Added BookMark');
                });
            } else {
              firestore()
                .collection('Delete')
                .add({
                  text: item.text,
                })
                .then(() => {
                  console.log('Deleted BookMark');
                });
            }
            swipeable.close();
          }}>
          <View className="px-3 py-5 bg-white">
            <Text className="text-black">{item.text}</Text>
          </View>
        </Swipeable>
      )}
    />
  );
};

export default Swipable;
