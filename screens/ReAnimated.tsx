import {Button, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const ReAnimated = () => {
  const value = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      translateX: value.value,
    };
  });
  return (
    <View className="flex-1 justify-center items-center">
      <Animated.View className={'w-20 h-20 bg-blue-400'} style={style} />
      <Button title="Click Me" onPress={() => (value.value = 100)} />
    </View>
  );
};

export default ReAnimated;
