import {FlatList, Text, View} from 'react-native';
import React, {useState} from 'react';

interface Type {
  text: string;
  id: string;
}

let data: Type[] = [
  {text: 'Hello', id: '1'},
  {text: 'Hi', id: '2'},
  {text: 'Hey', id: '3'},
];

const PulltoRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    setRefreshing(true);
    setTimeout(() => {
      data.push({
        text: 'Helo',
        id: '4',
      });
      setRefreshing(false);
    }, 3000);
  }
  const renderItem = ({item}: {item: Type}) => {
    return (
      <View className="flex-1 bg-white px-3 py-5 mb-3">
        <Text className="text-black">{item.id}</Text>
        <Text className="text-black">{item.text}</Text>
      </View>
    );
  };

  return (
    <View className="h-screen">
      <FlatList
        className="mt-5"
        data={data}
        renderItem={renderItem}
        refreshing={refreshing}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => (
          <>
            <View className="bg-gray-200 h-1 w-full" />
          </>
        )}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default PulltoRefresh;
