import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useCallback, useState} from 'react';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

const SyncImageCloud = () => {
  const [response, setResponse] = useState<DocumentPickerResponse[]>();

  const handleDocumentSelection = useCallback(async () => {
    try {
      const responseFIle = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
      });
      setResponse(responseFIle);
      console.log(responseFIle);

      Alert.alert('Done');
    } catch (err) {
      console.warn(err);
    }
  }, []);
  const handleUpload = useCallback(async () => {
    if (response) {
      const uploadTask = response.map(file => {
        const {uri} = file;
        const filename = file.name;
        RNFetchBlob.fs.stat(uri).then(value => {
          return storage().ref(filename!).putFile(value.path);
        });
      });
      await Promise.all(uploadTask);
      Alert.alert('Done');
    }
  }, [response]);
  return (
    <View>
      <Text className="text-black text-base p-5 text-center">
        Sync Files on Cloud
      </Text>
      <TouchableOpacity
        className="bg-pink-700 p-4 mx-5 my-5 rounded-md"
        onPress={handleDocumentSelection}>
        <Text className="text-center text-base">Pick a file</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-pink-700 p-4 mx-5 rounded-md"
        onPress={handleUpload}>
        <Text className="text-center text-base">Sync File</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SyncImageCloud;
