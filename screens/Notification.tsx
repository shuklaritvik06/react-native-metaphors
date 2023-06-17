import {View, Text, Modal, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';

const Notification = () => {
  const [notification, setNotification] = useState<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
  };
  useEffect(() => {
    getToken().then(() => {});
  });
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setNotification(remoteMessage);
      console.log(remoteMessage);

      setModalVisible(true);
    });

    return unsubscribe;
  }, []);
  return (
    <>
      {notification ? (
        <>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View className="flex-1 justify-center items-center">
              <View>
                <Text className="text-black">
                  {JSON.stringify(notification.data)}
                </Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text className="text-black">Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Notification;
