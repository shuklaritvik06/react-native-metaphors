import {View, FlatList, Text} from 'react-native';
import React from 'react';
import data from '../data/data.json';

const Grid = () => {
  return (
    <FlatList
      data={data}
      className="flex-1 mx-2"
      numColumns={2}
      renderItem={({item}) => {
        return (
          <View className="bg-white w-1/2 justify-center items-center drop-shadow-xl border p-4">
            <Text className="w-full text-black">{item.description}</Text>
          </View>
        );
      }}
    />
  );
};

export default Grid;
