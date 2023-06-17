import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import data from '../data/data.json';
const initialData = data.slice(0, 10);
let lastIndex = 10;
const InfiniteScroll = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <View>
      <FlatList
        data={initialData}
        renderItem={({item}) => {
          return (
            <View className="bg-white px-3 py-5 mb-3">
              <Text className="text-black font-bold">{item.title}</Text>
            </View>
          );
        }}
        keyExtractor={() => Math.random().toString()}
        onEndReachedThreshold={0}
        onEndReached={() => {
          setLoading(true);
          setTimeout(() => {
            if (lastIndex < data.length) {
              const newData = data.slice(lastIndex, lastIndex + 10);
              initialData.push(...newData);
              lastIndex += 10;
            }
            setLoading(false);
          }, 1000);
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListFooterComponent={() => {
          return (
            <>
              {isLoading ? (
                <View>
                  <ActivityIndicator size={'large'} />
                </View>
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
};

export default InfiniteScroll;
