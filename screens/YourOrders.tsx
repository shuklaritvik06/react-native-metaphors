import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Card, Text} from 'react-native-paper';
import {FlatList} from 'react-native';

const YourOrders = () => {
  const [orders, setOrders] = useState<any[]>();
  useEffect(() => {
    const subscriber = firestore()
      .collection('Wishlist')
      .onSnapshot(querySnapshot => {
        const orderData: any[] = [];

        querySnapshot.forEach(documentSnapshot => {
          orderData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setOrders(orderData);
      });

    return () => subscriber();
  }, []);

  return (
    <FlatList
      data={orders}
      renderItem={item => {
        return (
          <Card mode="elevated">
            <Card.Content>
              <Text variant="titleLarge">{item.item.title}</Text>
              <Text variant="bodyMedium">{item.item.description}</Text>
            </Card.Content>
            <Card.Cover source={{uri: item.item.image}} />
          </Card>
        );
      }}
    />
  );
};

export default YourOrders;
