import {View, Text, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import jsonData from '../data/data.json';

interface Data {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
let NUM_PAGES = jsonData.length / 5;
let CURRENT_PAGE = 1;
let initialData = jsonData.slice(0, 5);

const Pagination = () => {
  const [data, setData] = useState<Data[]>(initialData);
  const [currentLastIndex, setCurrentLastIndex] = useState<number>(10);
  const [currentPrevIndex, setCurrentPrevIndex] = useState<number>(5);

  function nextPage() {
    setData(jsonData.slice(currentPrevIndex, currentLastIndex));
    CURRENT_PAGE += 1;
    if (CURRENT_PAGE < NUM_PAGES) {
      setCurrentPrevIndex(currentLastIndex);
      setCurrentLastIndex(prev => prev + 5);
    }
  }
  function prevPage() {
    const prevIndex = currentPrevIndex - 5;
    const lastIndex = currentLastIndex - 5;
    setData(jsonData.slice(prevIndex, lastIndex));
    CURRENT_PAGE -= 1;
    if (CURRENT_PAGE > 1) {
      setCurrentPrevIndex(prevIndex);
      setCurrentLastIndex(lastIndex);
    }
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View className="bg-white px-3 py-5 mb-3">
              <Text className="text-black">{item.title}</Text>
            </View>
          );
        }}
      />
      <View className="flex-1 flex-row justify-center">
        <Text className="text-black text-xl font-bold">
          Page {CURRENT_PAGE}
        </Text>
      </View>
      <View className="flex flex-row justify-center gap-x-3 mb-5">
        <View className="flex-1">
          <Button
            title="Prev"
            onPress={() => prevPage()}
            disabled={CURRENT_PAGE === 1}
          />
        </View>
        <View className="flex-1">
          <Button
            title="Next"
            onPress={() => nextPage()}
            disabled={CURRENT_PAGE === NUM_PAGES}
          />
        </View>
      </View>
    </>
  );
};

export default Pagination;
