import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ExpandedList = () => {
  interface Type {
    title: string;
    data: {
      name: string;
      id: string;
    }[];
    selected: boolean;
  }
  let data = [
    {
      title: 'Electronics',
      data: [
        {name: 'TV', id: '1'},
        {name: 'LCD', id: '2'},
        {name: 'Fridge', id: '3'},
      ],
      selected: false,
    },
    {
      title: 'Grocery',
      data: [
        {name: 'Onion', id: '1'},
        {name: 'Potato', id: '2'},
        {name: 'Tomato', id: '3'},
      ],
      selected: false,
    },
  ];
  const [nestedData, setNestedData] = useState<Type[]>(data);

  function select(index: number) {
    let temp: Type[];
    data = data.map((item, ind) => {
      if (index === ind) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return item;
    });
    temp = data;
    setNestedData(temp);
  }

  return (
    <View className="mt-5">
      <FlatList
        data={nestedData}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                className="px-3 py-5 mb-3 bg-white"
                onPress={() => select(index)}>
                <Text className="text-black font-bold">{item.title}</Text>
                {nestedData.length > 0 && item.selected ? (
                  <FlatList
                    data={item.data}
                    keyExtractor={obj => obj.id}
                    renderItem={props => {
                      return (
                        <View className="drop-shadow-lg bg-white p-2">
                          <Text className="text-black font-bold">
                            {props.item.name}
                          </Text>
                        </View>
                      );
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </>
          );
        }}
      />
    </View>
  );
};

export default ExpandedList;
