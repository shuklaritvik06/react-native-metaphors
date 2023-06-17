import {View, Text, TextInput, Button, Alert} from 'react-native';
import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadFile = () => {
  const [url, setUrl] = React.useState('');
  const downloadFile = () => {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      path: dirs.DownloadDir + `/${url.split('/').pop()}`,
    })
      .fetch('GET', url)
      .then(res => {
        Alert.alert('The file saved to ', res.path());
      });
  };
  return (
    <View>
      <Text className="text-black text-lg text-center p-5 bg-white">
        Download File
      </Text>
      <TextInput
        placeholder="Enter url"
        onChangeText={text => setUrl(text)}
        className="text-black border border-gray-400 rounded-lg mx-5 my-5 px-3 py-5"
        placeholderTextColor={'black'}
      />
      <View className="mx-5">
        <Button title="Download Image" onPress={downloadFile} />
      </View>
    </View>
  );
};

export default DownloadFile;
