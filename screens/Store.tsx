import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {CardComponent} from './CardComponent';
import {Root2} from '../types/interfaces';

const Store = () => {
  const [order, setOrder] = useState<Root2[]>();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setOrder(data));
  }, []);
  return (
    <FlatList
      data={order}
      renderItem={item => {
        return <CardComponent dataList={item.item} index={item.index} />;
      }}
    />
  );
};

export default Store;
// https://fakestoreapi.com/products
