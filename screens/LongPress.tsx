import {View} from 'react-native';
import React from 'react';
import {LongPressGestureHandler, State} from 'react-native-gesture-handler';

const LongPress = () => {
  return (
    <LongPressGestureHandler
      minDurationMs={500}
      onHandlerStateChange={event => {
        if (event.nativeEvent.state === State.ACTIVE) {
          console.log('Long Pressed');
        }
      }}>
      <View className="w-32 h-32 bg-green-600" />
    </LongPressGestureHandler>
  );
};

export default LongPress;
