import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PERMISSIONS, request} from 'react-native-permissions';

const Permission = () => {
  return (
    <View>
      <TouchableOpacity
        className="bg-blue-400 p-5 m-5"
        onPress={() => {
          request(PERMISSIONS.ANDROID.CAMERA).then(result => {
            console.log(result);
          });
        }}>
        <Text className="text-center text-base font-bold">Camera Perms</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-400 p-5 m-5"
        onPress={() => {
          request(PERMISSIONS.ANDROID.CALL_PHONE).then(result => {
            console.log(result);
          });
        }}>
        <Text className="text-center text-base font-bold">Call Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-400 p-5 m-5"
        onPress={() => {
          request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
            console.log(result);
          });
        }}>
        <Text className="text-center text-base font-bold">Read Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-400 p-5 m-5"
        onPress={() => {
          request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION).then(
            result => {
              console.log(result);
            },
          );
        }}>
        <Text className="text-center text-base font-bold">Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Permission;
