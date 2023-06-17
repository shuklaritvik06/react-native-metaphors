import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Interstitial = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Button
      title="Show Interstitial ADs"
      onPress={() => {
        interstitial.show();
      }}
    />
  );
};

export default Interstitial;
