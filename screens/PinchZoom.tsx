import {Animated, Image} from 'react-native';
import React from 'react';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';

const PinchZoom = () => {
  const scale = new Animated.Value(1);
  const pinchScale = new Animated.Value(1);
  const result = Animated.multiply(scale, pinchScale);
  let lastScale = 1;
  return (
    <PinchGestureHandler
      onGestureEvent={Animated.event(
        [
          {
            nativeEvent: {scale: pinchScale},
          },
        ],
        {
          useNativeDriver: true,
        },
      )}
      onHandlerStateChange={event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
          lastScale *= event.nativeEvent.scale;
          scale.setValue(lastScale);
          pinchScale.setValue(1);
        }
      }}>
      <Animated.View
        className="flex-1 justify-center items-center"
        style={{transform: [{scale: result}, {perspective: 1}]}}>
        <Image source={require('../assets/flower.jpg')} className="w-60 h-60" />
      </Animated.View>
    </PinchGestureHandler>
  );
};

export default PinchZoom;
