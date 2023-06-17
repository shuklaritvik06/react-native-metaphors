import {View, Animated, Button, Easing} from 'react-native';
import React, {useState} from 'react';

const AnimatedNative = () => {
  const animation = useState(new Animated.Value(0))[0];
  const [isAnimation, setIsAnimation] = React.useState(false);
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: isAnimation ? 0 : 1,
      useNativeDriver: true,
      friction: 100,
      tension: 50,
    }).start();
    Animated.timing(animation, {
      toValue: 100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          marginLeft: animation,
          borderRadius: isAnimation ? 50 : 0,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200],
              }),
            },
            {
              rotate: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
            {
              scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.5],
              }),
            },
            {
              translateX: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 250],
              }),
            },
          ],
        }}
      />
      <Button
        onPress={() => {
          startAnimation();
          setIsAnimation(!isAnimation);
        }}
        title="Start"
      />
    </View>
  );
};

export default AnimatedNative;
