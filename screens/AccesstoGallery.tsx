import {View, Button, Image, FlatList} from 'react-native';
import React from 'react';
import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';

const AccesstoGallery = () => {
  const [photos, setPhotos] = React.useState<PhotoIdentifier[]>([]);
  const fetchPhotos = async () => {
    const {edges} = await CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    });
    setPhotos(edges);
  };
  return (
    <View>
      <FlatList
        data={photos}
        className="w-full"
        numColumns={2}
        renderItem={({item}) => {
          return (
            <Image
              className="w-1/2 h-32 mx-3 mb-3"
              source={{uri: item.node.image.uri}}
            />
          );
        }}
      />
      <Button
        title="Access Gallery Images"
        onPress={() => {
          fetchPhotos();
        }}
      />
    </View>
  );
};

export default AccesstoGallery;
