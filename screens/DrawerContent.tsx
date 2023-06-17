import {View, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';

const DrawerContent: React.FC = props => {
  const [active, setActive] = React.useState('');

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View>
          <Text className="text-black">Hello</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section title="Hello" showDivider={false}>
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
