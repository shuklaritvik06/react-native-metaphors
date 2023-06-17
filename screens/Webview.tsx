import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const Webview = () => {
  const [url, setURL] = useState('');
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <WebView source={{uri: url}} className="flex-1" />
      ) : (
        <View className="flex-row items-center">
          <View className="px-3 py-5 flex-1">
            <TextInput
              placeholder="Enter Url"
              className="border text-black border-gray-300 px-3"
              placeholderTextColor={'black'}
              onChangeText={text => setURL(text)}
            />
          </View>
          <TouchableOpacity
            className="bg-pink-950 px-5 py-3 m-5"
            onPress={() => {
              setShow(true);
            }}>
            <Text className="text-center text-lg">Go</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Webview;
