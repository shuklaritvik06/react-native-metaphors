import {View} from 'react-native';
import React, {useRef} from 'react';
import {
  TapGestureHandler,
  State,
  HandlerStateChangeEvent,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

const GestureHandler = () => {
  const doubleTapRef = useRef(null);

  return (
    <View>
      <TapGestureHandler
        onHandlerStateChange={(
          event: HandlerStateChangeEvent<TapGestureHandlerEventPayload>,
        ) => {
          if (event.nativeEvent.state === State.ACTIVE) {
            console.log('Single');
          }
        }}
        waitFor={doubleTapRef}>
        <TapGestureHandler
          ref={doubleTapRef}
          numberOfTaps={2}
          onHandlerStateChange={(
            event: HandlerStateChangeEvent<TapGestureHandlerEventPayload>,
          ) => {
            if (event.nativeEvent.state === State.ACTIVE) {
              console.log('Double');
            }
          }}>
          <View className="w-52 h-52 bg-violet-950" />
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
};

export default GestureHandler;
