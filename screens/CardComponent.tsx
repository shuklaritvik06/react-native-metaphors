import * as React from 'react';
import {Button, Card, Text} from 'react-native-paper';
import {Root2} from '../types/interfaces';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import RazorpayCheckout, {CheckoutOptions} from 'react-native-razorpay';

export const CardComponent = ({
  dataList,
  index,
}: {
  dataList: Root2;
  index: number;
}) => {
  function handleWishList() {
    firestore()
      .collection('Wishlist')
      .add({
        wish: index,
        title: dataList.title,
        description: dataList.description,
        image: dataList.image,
      })
      .then(() => {
        Alert.alert('Wishlist Added');
      });
  }
  function handleOrder() {
    const options: CheckoutOptions = {
      description: 'Product Description',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_spiDOlj4ONBa9A',
      amount: 100 * 100,
      name: 'Test Store',
      order_id: '',
      prefill: {
        email: 'ritvik.shukla@example.com',
        contact: '8929223293',
        name: 'Ritvik Shukla',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        firestore()
          .collection('Orders')
          .add({
            orderId: index,
            title: dataList.title,
            description: dataList.description,
            image: dataList.image,
          })
          .then(() => {
            console.log('Order added!');
          });
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        console.log(error);
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  }
  return (
    <Card mode="elevated">
      <Card.Content>
        <Text variant="titleLarge">{dataList.title}</Text>
        <Text variant="bodyMedium">{dataList.description}</Text>
      </Card.Content>
      <Card.Cover source={{uri: dataList.image}} />
      <Card.Actions>
        <Button onPress={() => handleWishList()}>Wishlist</Button>
        <Button onPress={() => handleOrder()}>Buy</Button>
      </Card.Actions>
    </Card>
  );
};
