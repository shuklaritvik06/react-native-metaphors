import {View, Text, Button} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const Geolocations = () => {
  const [address, setAddress] = React.useState({
    city: '',
    country: '',
    postalCode: '',
    region: '',
  });
  return (
    <View>
      <Text className="text-black font-bold text-lg text-center p-5">
        Wanna see your Address ?
      </Text>
      <View className="mx-5">
        <Button
          title="Get Location"
          onPress={() => {
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
              .then(result => {
                if (result === RESULTS.GRANTED) {
                  Geolocation.getCurrentPosition(
                    position => {
                      fetch(
                        `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`,
                      ).then(response => {
                        response.json().then(data => {
                          setAddress({
                            city: data.address.city,
                            country: data.address.country,
                            postalCode: data.address.postcode,
                            region: data.display_name,
                          });
                        });
                      });
                    },
                    error => {
                      console.log(error.code, error.message);
                    },
                    {
                      enableHighAccuracy: true,
                      timeout: 15000,
                      maximumAge: 10000,
                    },
                  );
                }
              })
              .catch(_error => {
                console.log(_error);
              })
              .catch(_error => {
                console.log(_error);
              });
          }}
        />
      </View>
      <View className="mx-5">
        <Text className="text-black font-bold text-lg text-center p-5">
          {address.city}
        </Text>
        <Text className="text-black font-bold text-lg text-center p-5">
          {address.country}
        </Text>
        <Text className="text-black font-bold text-lg text-center p-5">
          {address.postalCode}
        </Text>
        <Text className="text-black font-bold text-lg text-center p-5">
          {address.region}
        </Text>
      </View>
    </View>
  );
};

export default Geolocations;
