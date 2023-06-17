import {View, Modal, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

const Modals = () => {
  const [modal, setModal] = useState(false);
  return (
    <View className="flex-1">
      <Modal visible={modal} animationType="fade" transparent>
        <View className="flex-1 bg-black/30 justify-center items-center">
          <View className="w-3/4 rounded-lg h-52 bg-white p-3">
            <TouchableOpacity
              className="self-end px-3 py-2 bg-pink-300 rounded-full"
              onPress={() => setModal(!modal)}>
              <Text className="text-black font-bold">X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        className="bg-blue-500 p-3 text-base font-bold m-4 rounded-md"
        onPress={() => setModal(!modal)}>
        <Text className="text-center">Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Modals;
